using System.Net;

namespace YGOPriceCalculator.Core.Models;

public class Response<T> : IResponse<T> where T : notnull
{
    public HttpStatusCode Code { get; set; } = HttpStatusCode.OK;
    public string ErrorMessage { get; set; } = string.Empty;
    public T Value { get; set; } = default!;

    public static Response<T> Ok(T value)
    {
        return new Response<T>() {Value = value};
    }

    public static Response<T> BadRequest(string message)
    {
        return new Response<T>() {Code = HttpStatusCode.BadRequest, ErrorMessage = message};
    }

    public static Response<T> Unauthorized(string message)
    {
        return new Response<T>() {Code = HttpStatusCode.Unauthorized, ErrorMessage = message};
    }

    public static Response<T> NotFound(string message)
    {
        return new Response<T>() {Code = HttpStatusCode.NotFound, ErrorMessage = message};
    }
}