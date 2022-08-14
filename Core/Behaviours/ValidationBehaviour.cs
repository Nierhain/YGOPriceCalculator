using System.Net;
using MediatR;
using YGOPriceCalculator.Core.Models;

namespace YGOPriceCalculator.Core.Behaviours;

public class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
    where TResponse : IResponse<object>, new()
{
    private readonly IValidationHandler<TRequest> _validator;

    public ValidationBehavior() { }
    public ValidationBehavior(IValidationHandler<TRequest> validator)
    {
        _validator = validator;
    }

    public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
    {
        if (_validator is null)
        {
            return await next();
        }

        var result = await _validator.Validate(request);
        if (!result.IsSuccessful)
        {
            return new TResponse { Code = HttpStatusCode.BadRequest, ErrorMessage = result.Error };
        }

        return await next();
    }
}