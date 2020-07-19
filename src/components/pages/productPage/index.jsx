import React from 'react'
function ProductPage(props) {
    console.log('Match: ', props.match)
    console.log('Location: ', props.location)
    console.log('History: ', props.history)
    const clickHAndler = () => {
        props.history.push('/')
    }
    function clickHAndler2() {
        props.history.goBack();
    }
    function clickHAndler3() {
        props.history.go('/login');
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <span color="red">Product ID: {props.match.params.id}</span>
            <button onClick={clickHAndler}>Go Home :)</button>
            <button onClick={clickHAndler2}>Go Back :)</button>
            <button onClick={clickHAndler3}>Go  :)</button>
        </div>
    )
}
export default ProductPage;