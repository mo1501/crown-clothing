import './directory.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component'

const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: 'shop/hats'

    },
    {
      id: 2,
      title: 'Mens',
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: 'shop/mens'

    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: 'shop/sneakers'

    },
    {
      id: 5,
      title: 'Jackets',
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: 'shop/jackets'

    },

  ];

const Directory = () => {
    
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}


        </div>
    );
}
export default Directory;