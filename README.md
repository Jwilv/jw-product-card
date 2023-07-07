### jw-product-card

Este es un paquete de pruebas de despliegues en NPM


```
import { ProductCard, ProductButtons, ProductImg, ProductTitle } from 'jw-product-card';
```

```
<ProductCard 
    product={ product }
    initialValues={{
        counter: 6,
        countMax: 10,
    }}
>
    {
        ({ reset, count, isMaxReached, countMax, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```