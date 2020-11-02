import React from "react";

export default function NewsCard() {
  return (
    <div className="newscard">
      {data.map((data) => (
        <div className="newscard__card">
            <span className='newscard__span'>{data.date}</span>
          <div className="newscard__img-cont">
            <img src={data.img} className="newscard__img" />
          </div>
          <div className="newscard__content">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    img: "/news/1.jpg",
    title: "عائلة الانجاز باشرت بإطلاق حملة رمضان كل الخير بأيامك",
    desc:
      "باشرت عائلة الانجاز وبالتعاون مع مؤسسة الغد المشرق بإطلاق حملة “رمضان كل الخير بأيامك” وذلك من خلال اقامة افطار جماعي لأكثر من 50طفل يتيم داخل مول زيونة وادخال",
 date:'2019-05-12 '
    },
  {
    img: "/news/2.jpg",
    title:
      "فوز فريق عائلة الأنجاز في أول مسابقة cyber security CTF اقيم في العراق",
    desc:
      "لكل مبدع إنجاز وإنجاز كلها مبدعين نبارك لفريق عائلة الانجاز الفوز بالمرتبة الاولى في اول cyber security CTF اقيم في العراق",
  date:'2019-04-18'
    },
  {
    img: "/news/3.jpg",
    title: "افتتاح أول صف الكتروني في العراق برعاية شركة الانجاز",
    desc:
      "افتتاح أول صف الكتروني في العراق حيث زارت شركة الانجاز مدرسة ناظم الطبقجلي في بغداد وقامت بتجهيز الطلاب بصف الكتروني متكامل من شاشة عرض ووسائل الكترونية",
  date:'2019-04-16 '
    },
  {
    img: "/news/4.jpg",
    title:
      "زيارة شركة الانجاز لكلية الرافدين الجامعة وتكريم الكادر التدريسي والطلبةالمتميزين بمشاريعهم",
    desc:
      "كرمت شركة الانجاز للخدمات الالكترونية كوادر وطلبة كلية الرافدين الجامعة المتميزين والمتفوقين والمشاركين في مهرجان",
  date:'2019-04-16 '
    },
];
