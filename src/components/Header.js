import react from 'react';

export default function Header(props) {
    const {countCartItems} = props;
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    <h1>Shopping Cart Beta1</h1>
                </a>
            </div>
            <div>
                <a href='#/cart'>


                    Cart {'  '}
                    {countCartItems? (
                        <button className='badge'>{countCartItems}</button>
                    ):(
                        ''
                    )}
                    
                    </a><a href='#/'signin>   Sign In</a>
                
            </div>
        </header>
    )
}