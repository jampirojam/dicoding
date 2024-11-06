import React from 'react';
import { createRoot } from 'react-dom/client';
import DicodingReact from './assets/dicoding.jpg';

// createElement
// const heading = React.createElement('h1', null, 'Biodata Perusahaan');

// const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
// const listItem2 = React.createElement('li', null, 'Bidang: Education');
// const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');

// const footer = React.createElement('p', { className: 'test-footer' }, 'FOOTER');
// const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);

// const createElement = React.createElement('div', null, [heading, unorderedList, footer]);

// const rootCreateElement = createRoot(document.getElementById('root-create-element'));

// rootCreateElement.render(createElement);

// JSX
// const rootJsx = createRoot(document.getElementById('root-jsx'));
// const jsx = (
//     <div>
//         <h1>Biodata Perusahaan</h1>
//         <ul>
//             <li>Nama: Dicoding Indonesia</li>
//             <li>Bidang: Education</li>
//             <li>Tagline: Decode Ideas, Discover Potential.</li>
//         </ul>
//         <p class="test-footer">FOOTER</p>
//         <img src={DicodingReact}></img>
//     </div>
// );

// rootJsx.render(jsx);

// NEWS
function Button({ link }) {
    // TODO: selesaikan component-nya
    return <a href={link}>Find out more</a>;
  }
   
  function CardHeader({ image, category }) {
    // TODO: selesaikan component-nya
    return (
        <header>
          <h4>{category}</h4>
          <img src={image} alt="" />
        </header>
      );
  }
   
  function CardBody({ date, title, content, link }) {
    // TODO: selesaikan component-nya
    return (
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
          <p>{content}</p>
          <Button link={link} />
        </div>
      );
  }
   
  function Card({ image, category, date, title, content, link }) {
    // TODO: selesaikan component-nya
    return (
        <article>
          <CardHeader image={image} category={category} />
          <CardBody date={date} title={title} content={content} link={link} />
        </article>
      );
  }
   
  function Header({ title, subtitle }) {
    // TODO: selesaikan component-nya
    return (
        <header>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </header>
      );
  }
   
  function News() {
    // data news
    const someNews = [
      {
        title: 'CNN Acuire BEME',
        date: 'March 20 2022',
        content: "CNN purchased Casey Neistat's Beme app for $25million.",
        image: 'https://source.unsplash.com/user/erondu/600x400',
        category: 'News',
        link: '#'
      },
      {
        title: 'React and the WP-API',
        date: 'March 19 2022',
        content: 'The first ever decoupled starter theme for React & the WP-API.',
        image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
        category: 'News',
        link: '#'
      },
      {
        title: 'Nomad Lifestyle',
        date: 'March 19 2022',
        content: 'Learn our tips and tricks on living a nomadic lifestyle.',
        image: 'https://source.unsplash.com/user/erondu/600x400',
        category: 'Travel',
        link: '#'
      }
    ];
   
    // TODO: selesaikan component-nya
    return (
        <div>
          <Header title="Latest News" subtitle="Covering March & April 2022" />
          <Card 
            title={someNews[0].title}
            date={someNews[0].date}
            content={someNews[0].content}
            image={someNews[0].image}
            category={someNews[0].category}
            link={someNews[0].link}
          />
          <Card 
            title={someNews[1].title}
            date={someNews[1].date}
            content={someNews[1].content}
            image={someNews[1].image}
            category={someNews[1].category}
            link={someNews[1].link}
          />
          <Card 
            title={someNews[2].title}
            date={someNews[2].date}
            content={someNews[2].content}
            image={someNews[2].image}
            category={someNews[2].category}
            link={someNews[2].link}
          />
        </div>
      );
  }
   
  const root = createRoot(document.getElementById('root'));
  root.render(<News />);
