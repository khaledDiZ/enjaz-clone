import React from 'react'

export default function Copyright() {
    return (
        <div style={{
            display:'flex',
            color:"#ccc",
            fontSize:"1.4rem",
            flexDirection:'row-reverse',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#434343'
        }}>
            حميع الحقوق محفوضة لــ
            <a style={{padding:"0px 10px"}} href='' className='nav__brand'>
                <span className='nav__brand--align'>
                <img className='nav__img' src="\enjaz-white.svg" alt=""/>
                        enjaz     
                </span>
            </a>
        </div>
    )
}
