using System.Linq.Expressions;
using AutoMapper;
using AutoMapper.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using YGOPriceCalculator.Core.Models;

namespace YGOPriceCalculator.Core.Data;

public class DbRepository : IDbRepository
{
    private readonly DbContext _context;

    public DbRepository(DbContext context)
    {
        _context = context;
    }

    public async Task<T> Read<T>(Guid id, string[]? includes = null) where T : class, IEntity
    {
        return await Query<T>(x => x.Id == id, includes).FirstAsync();
    }

    public async Task<T> Read<T>(Expression<Func<T, bool>> query, string[]? includes = null) where T : class, IEntity
    {
        return await Query(query, includes).FirstAsync();
    }

    public async Task<List<T>> ReadList<T>(Expression<Func<T, bool>> query, string[]? includes = null)
        where T : class, IEntity
    {
        return await Query(query, includes).ToListAsync();
    }

    public async Task<Guid> Add<T>(T entity) where T : class, IEntity
    {
        var id = _context.Set<T>().Add(entity).Entity.Id;
        await _context.SaveChangesAsync();
        return id;
    }

    public async Task<List<T>> UpdateList<T>(IMapper mapper, List<T> entities) where T : class, IEntity
    {
        var updated = new List<T>();
        foreach (var entity in entities)
            updated.Add(await _context.Set<T>().Persist(mapper).InsertOrUpdateAsync(entity));
        await _context.SaveChangesAsync();
        return updated;
    }

    public async Task<T> Update<T>(IMapper mapper, T entity) where T : class, IEntity
    {
        var updated = await _context.Set<T>().Persist(mapper).InsertOrUpdateAsync(entity);
        await _context.SaveChangesAsync();
        return updated;
    }

    private IQueryable<T> Query<T>(Expression<Func<T, bool>> expression, string[]? includes = null)
        where T : class, IEntity
    {
        var query = _context.Set<T>().AsQueryable();
        if (includes is null) return query.Where(expression).AsQueryable();
        foreach (var include in includes) query.Include(include);
        return query.Where(expression).AsQueryable();
    }
}