
export default function Header() {

    return (
        <div id='header' className='header'>
            <img className='header__img' src="/cover.png" alt=""/>
            <div className='header__content'   >
                <h1  >ابتكار ,ابداع ,انجاز</h1>    
                <span >طور خدماتك وحولها على الانترنت وارفع من دخلك</span>
                <div className='header__button-cont'>
                    <button className='header__button'>منتجاتنا</button>
                    <a href='#contact' className='header__button'>تواصل معنا</a>

                </div>
                </div>
        </div>
    )
}
