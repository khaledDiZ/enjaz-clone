import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            {/* first column */}
            <div className='footer__section'>
                    <h1>روابط مهمة</h1>
                    <ul>
                        <li>سـياسة الخصوصية</li>
                        <li>الوظائف المتوفـرة</li>
                        <li>منصـــــة اقساطي</li>
                        <li>شعار شركة انجــــاز</li>
                    </ul>
            </div>
            {/* second column */}

            <div className='footer__section'>
            <h1>من منتجاتنا</h1>
                    <ul>
                        <li>منصة اقساطي</li>
                        <li>تطبيق انجـــــــاز</li>
                        <li>منصة معاملتي</li>
                        <li>بــاقي المشاريع</li>
                    </ul>
            </div>
            {/* third column */}
            <div className='footer__section'>
            <iframe className='map' src="https://maps.google.com/maps?q=Enjaz%20LLC.&t=m&z=16&output=embed&iwloc=near" frameborder="0"></iframe>
           
            </div>
        </div>
    )
}
