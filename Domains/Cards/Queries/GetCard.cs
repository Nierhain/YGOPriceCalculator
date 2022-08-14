using MediatR;
using YGOPriceCalculator.Core.Data;
using YGOPriceCalculator.Core.Models;
using YGOPriceCalculator.Domains.Cards.Models;

namespace YGOPriceCalculator.Domains.Cards.Queries;

public class GetCard : IRequest<Response<Card>>
{
    public GetCard(Guid id)
    {
        Id = id;
    }

    public Guid Id { get; }
}

public class GetCardHandler : IRequestHandler<GetCard, Response<Card>>
{
    private readonly IDbRepository _repository;

    public GetCardHandler(IDbRepository repository)
    {
        _repository = repository;
    }

    public async Task<Response<Card>> Handle(GetCard request, CancellationToken cancellationToken)
    {
        return Response<Card>.Ok(await _repository.Read<Card>(request.Id));
    }
}