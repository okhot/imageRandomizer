import { useCallback, useEffect, useState } from 'react'

let arr = [{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 1",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 2",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 3",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 4",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 5",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 6",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 7",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 8",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 9",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture 10",
},
{
    name: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fjour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg&imgrefurl=https%3A%2F%2Ffr.dreamstime.com%2Fphotos-images%2Fenvironnement.html&tbnid=pZG009_n8yw8iM&vet=12ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ..i&docid=fhmTq1eaflHFeM&w=800&h=484&q=images&ved=2ahUKEwi04e3oo7P8AhW6U6QEHYAnCIMQMygHegUIARDrAQ",
    Url: "picture",
},
]

const generateRandom = () => {
    let newArr = []
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * arr.length)
        newArr.push(arr[random])
    }
    return newArr
}

export default function useGenerateImage() {
    const generate = useCallback(() => setNumber(generateRandom()), []);

    useEffect(() => {
        const interval = setInterval(generate, 3000);
        return () => clearInterval(interval);
    }, [generate])

    const [number,  setNumber] = useState(generateRandom())

    console.log(number)

    return {generate, number}
}


