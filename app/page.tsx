import getPostMetadata from 'components/getPostMetadata';
import PostPreview from 'components/PostPreview';
import Link from 'next/link';



const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ));

    return(
      <div>
        <div className='border rounded-lg p-2 mb-4'>
          <p className=' text-lg m-1'>👋 Bienvenue sur mon nouveau portfolio.</p>
          <p className=' text-justify'>Actuellement en 2ème année à Adimaker, Lille majeur "ISEN".</p>
          <p>Adimaker étant une classe préparatoire avec un apprentissage par projet. Je consigne ici une partie des projets que j’ai réalisés pour Adimaker ou sur mon temps libre.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
      </div>
    );
  };

export default HomePage;