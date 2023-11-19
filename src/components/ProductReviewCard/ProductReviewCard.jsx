
// Component Imports
import Image from './Image';
import Header from './Header';
import SelectionInputs from './SelectionInputs';
import Rating from './Rating';
import Features from './Features';
import Finalize from './Finalize';

const ProductReviewCard = () => {
    return (
        <div className="bg-secondary-clr-1 w-fit m-auto shadow-xl text-primary-clr-1 p-4 md:p-8 rounded-md font-sans flex flex-col gap-4 md:flex-row">
            <Image />
            <div className="bg-secondary-clr-2 flex flex-col gap-8 rounded-sm shadow-lg p-4 justify-center md:p-8">
                <Header />
                <SelectionInputs />
                {/* <Rating /> */}
                <Features />
                <Finalize />
            </div>
        </div>
    )
}

export default ProductReviewCard
