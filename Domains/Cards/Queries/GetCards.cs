using MediatR;
using YGOPriceCalculator.Core.Data;
using YGOPriceCalculator.Core.Models;
using YGOPriceCalculator.Domains.Cards.Models;

namespace YGOPriceCalculator.Domains.Cards.Queries;

public class GetCards: IRequest<Response<List<Card>>>{ }

public class GetCardsHandler : IRequestHandler<GetCards, Response<List<Card>>>
{
    private readonly IDbRepository _repository;

    public GetCardsHandler(IDbRepository repository)
    {
        _repository = repository;
    }

    public async Task<Response<List<Card>>> Handle(GetCards request, CancellationToken cancellationToken)
    {
        return Response<List<Card>>.Ok(await _repository.ReadList<Card>(x => true));
    }
}