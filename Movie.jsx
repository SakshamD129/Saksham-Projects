import { useRef, useState } from 'react'

function Movie() {
    const inputRef = useRef();
    const [item, setItem] = useState(null);
    const container = [
        "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
        "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli fruit", "vanilla",
        "watermelon", "xigua", "yellow passionfruit", "zucchini", "almond", "blackberry", "coconut", "dragonfruit", "eggplant", "feijoa",
        "guava", "hazelnut", "iceberg lettuce", "jackfruit", "kumquat", "lime", "mulberry", "nutmeg", "olive", "pineapple",
        "quinoa", "radish", "sapote", "tomato", "ugni", "violet", "walnut", "xoconostle", "yam", "zest",
        "asparagus", "blueberry", "cantaloupe", "dill", "endive", "fennel", "gooseberry", "horseradish", "indigo", "jalapeno",
        "kale", "lavender", "mint", "nectar", "onion", "parsley", "quail", "rosemary", "sage", "thyme",
        "upland cress", "vanilla bean", "watercress", "xylocarp", "yucca", "zebra tomato", "anise", "butternut", "cashew", "daikon",
        "escarole", "flaxseed", "ginger", "hibiscus", "ivy gourd", "juniper", "kohlrabi", "lemongrass", "mustard", "nutella",
        "okra", "peppermint", "quinine", "rhubarb", "starfruit", "turmeric", "ube", "vinegar", "wasabi", "xanthan gum"
    ];
    function tracking() {
        console.log("Changing!");
        console.log(inputRef.current.value)
        const real = container.map(element => {
            if (element.includes(`${inputRef.current.value}`)) {
                return (<div key={element} className='indi'>{element}</div>);

            }
        }
        )
        setItem(real);
    }
    return (
        <>
            <input ref={inputRef} type="text" onChange={tracking} />
            <div className='Movies'>{item}</div>
        </>
    )
}

export default Movie
