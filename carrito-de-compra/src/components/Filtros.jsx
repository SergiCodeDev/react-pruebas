export function Filtros () {
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" 
                name="price" 
                id="price"
                min="0"
                max="1000"
                 />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="home-decoration">Home Decoration</option>
                    <option value="groceries">Groceries</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}