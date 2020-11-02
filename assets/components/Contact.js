import React from 'react'

export default function Contact() {
    return (
        <div className='contact-cont' id='contact'>
            <div className='contact'>
                <div className='contact__img-cont hide'>
                    <img className='contact-img' src='/cover.png' />
                </div>
                <div className='contact__content'>
                        <h2>تواصل معنا</h2>
                        <label>الاسم</label>
                        <input type='text'/>
                        <label>رقم الهاتف</label>
                        <input type='text'/>
                        <label>الرسالة</label>
                        <input type='text'/>
                        <div>

                        <button>
                        ارسال
                        <svg className='arrow-left' viewBox="0 0 256 512" width="100" title="angle-left">
  <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
</svg>
                        </button>
                        </div>
                </div>
            </div>
        </div>
    )
}
