import './styles/Information.css';
import WatchAppleRed from "../img/RedApple.png";

export const Information = () => {
    return (
        <div className="pages">
            <img src={WatchAppleRed} height={450} alt="Apple Watch" />
            <div className="container-text">
                <h3>About The Product</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Doloribus itaque debitis saepe animi voluptatum eveniet tenetur. <br /> Corrupti molestias eaque magni officia.</p>
                <div className="max-content">
                    <box-icon name='check'></box-icon>
                    <p>Model N° 230 Red</p>
                    <box-icon name='check'></box-icon>
                    <p>Qualcom CPU</p>
                    <box-icon name='check'></box-icon>
                    <p>Screen LED</p>
                    <box-icon name='check'></box-icon>
                    <p>Effective Pixel Aprox. 240 megapixels</p>
                    <box-icon name='check'></box-icon>
                    <p>Aspect Ratio 3:2</p>
                    <box-icon name='check'></box-icon>
                    <p>Microphone include</p>
                    <box-icon name='check'></box-icon>
                    <p>Focal Length Equivalent to 3.6x</p>
                </div>
            </div>
        </div>
    )
}