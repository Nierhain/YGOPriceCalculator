using System.Linq.Expressions;
using AutoMapper;
using YGOPriceCalculator.Core.Models;

namespace YGOPriceCalculator.Core.Data;

public interface IDbRepository
{
    public Task<T> Read<T>(Guid id, string[]? includes = null) where T : class, IEntity;
    public Task<T> Read<T>(Expression<Func<T, bool>> query, string[]? includes = null) where T : class, IEntity;

    public Task<List<T>> ReadList<T>(Expression<Func<T, bool>> query, string[]? includes = null)
        where T : class, IEntity;

    public Task<Guid> Add<T>(T entity) where T : class, IEntity;
    public Task<T> Update<T>(IMapper mapper, T entity) where T : class, IEntity;
    public Task<List<T>> UpdateList<T>(IMapper mapper, List<T> entities) where T : class, IEntity;
}