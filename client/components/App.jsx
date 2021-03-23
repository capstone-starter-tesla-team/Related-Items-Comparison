import React, {useState} from 'react';


import OutfitCorsoul from './Carousels/OutfitCorsoul.jsx';
import ProductCarousel from './Carousels/ProductCarousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import Related from './Related.jsx';


const App = () => {



    return(
        <div>
           <OutfitCorsoul />
           <ProductCarousel />
           <ComparisonModal />
           <Related/>
        </div>
    );
}
export default App ; 