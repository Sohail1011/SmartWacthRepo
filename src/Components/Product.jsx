import './styles/Product.css';

export const Product = () => {
    return (
        <div className="content-product">
            <h2>Product Features</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem ratione voluptates vero facere.</p>
            <div className="features">
                <div className="anon">
                    <box-icon name='code-alt' size="8rem"></box-icon>
                    <h3>High Quality</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nemo voluptatum aut quo.</p>
                </div>
                <div className="anon">
                    <box-icon type='solid' name='layer' size="8rem"></box-icon>
                    <h3>Awesome Design</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nemo voluptatum aut quo.</p>
                </div>
                <div className="anon">
                    <box-icon type='solid' name='mouse' size="8rem"></box-icon>
                    <h3>Latest Technology</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nemo voluptatum aut quo.</p>
                </div>
                <div className="anon">
                    <box-icon name='book-reader' size="8rem"></box-icon>
                    <h3>User Friendly</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nemo voluptatum aut quo.</p>
                </div>
            </div>
        </div>
    )
}
