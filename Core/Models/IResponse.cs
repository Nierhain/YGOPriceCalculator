using System.Net;

namespace YGOPriceCalculator.Core.Models;

public interface IResponse<T>  where T : notnull
{
    public HttpStatusCode Code { get; set; }
    public string ErrorMessage { get; set; }
    public T Value { get; set; }
    
    
}