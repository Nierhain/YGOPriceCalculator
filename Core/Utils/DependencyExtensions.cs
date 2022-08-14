using YGOPriceCalculator.Core.Models;

namespace YGOPriceCalculator.Core.Utils
{
    public static class DependencyExtensions
    {
        public static void AddValidators(this IServiceCollection services)
        {
            services.Scan(scan => scan.FromAssemblyOf<IValidationHandler>()
            .AddClasses(classes => classes.AssignableTo<IValidationHandler>())
            .AsImplementedInterfaces()
            .WithTransientLifetime());
        }
    }
}
