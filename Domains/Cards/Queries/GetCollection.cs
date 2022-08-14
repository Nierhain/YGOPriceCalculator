using MediatR;
using YGOPriceCalculator.Core.Data;
using YGOPriceCalculator.Core.Models;
using YGOPriceCalculator.Domains.Cards.Models;

namespace YGOPriceCalculator.Domains.Cards.Queries
{
    public class GetCollection : IRequest<Response<Collection>>
    {
        public Guid Id { get; set; }

        public GetCollection(Guid id)
        {
            Id = id;
        }
    }

    public class GetCollectionHandler : IRequestHandler<GetCollection, Response<Collection>>
    {
        private readonly IDbRepository _repository;

        public GetCollectionHandler(IDbRepository repository)
        {
            _repository = repository;
        }

        public async Task<Response<Collection>> Handle(GetCollection request, CancellationToken cancellationToken)
        {
            return Response<Collection>.Ok(await _repository.Read<Collection>(x => x.Id == request.Id));
        }
    }
}
