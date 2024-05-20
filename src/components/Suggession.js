import React from 'react'
import Iframe from './Iframe'
function Suggession() {
    const videolist = [
        {
           src:"https://www.youtube.com/embed/JsiQOkhu7Sc?si=gZuD5A6UEMlU0t_A",
           name:"كلام بفلوس مع كابتن جانتي بالمجان اسرار عضلة الصدرللمبتدئين والمتقدمين (معلومات لن يخبرك بها احد!!!"
            },
            {
            src : "https://www.youtube.com/embed/d1aRNO2k6cg?si=XwZjUXnCPMYKiJ3z",
            name:"اسرار خطيرة عن سبب عدم تطور عضلة الكتف (لن يخبرك بك أحد ) فقط بالمجان مع كابتن جانتي شعبان"
            },
            {
            src : "https://www.youtube.com/embed/wkK97Bk-8VY?si=hQ9EPyg0MNr-JVBk",
            name:"Best of Hamed kozdoghli 🤣TOP16🤣ابداعات حامد الكزدغلي"
            },
            {
            src : "https://www.youtube.com/embed/T8-CqbvxXq4?si=PaNnezkxm_3iGXvp",
            name:"الجزء 3 كيف تكتب تمرين عضلة الاكتاف"
            },
    ];
  return (
    <div>
      {videolist.map((el) => (
      <Iframe el={el}/>
      ))}
    </div>
  );
}

export default Suggession
