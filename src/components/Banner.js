import { styled } from 'styled-components';
import { H1Type, H2Type, TitleH2 } from './Type';
import Pill from './Pill';
import CategoryCard from '../components/CategoryCard';
import { useState } from 'react';
import FormGroup from './FormGroup';

const CATEGORIES = {
  CATEGORY_ONE: 1,
  CATEGORY_TWO: 2,
  CATEGORY_THREE: 3,
};

const data = [
  {
    id: 1,
    category: CATEGORIES.CATEGORY_ONE,
    colorScheme: "pink",
    title: 'Category',
  },
  {
    id: 2,
    category: CATEGORIES.CATEGORY_TWO,
    colorScheme: "blue",
    title: 'Category',
  },
  // {
  //   id: 3,
  //   category: CATEGORIES.CATEGORY_TWO,
  //   colorScheme: "blue",
  //   title: 'Category',
  // },
  // {
  //   id: 4,
  //   category: CATEGORIES.CATEGORY_THREE,
  //   colorScheme: "green",
  //   title: 'Category',
  // },
];

const HeroBanner = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  z-index: 1;
  position: relative;
  flex-direction: column;
  justify-content: center;

  .categories {
    display: flex;
    gap: 1rem;
  }
`;

const BannerContent = styled.div`
  margin: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .lead {
    margin-bottom: 16px;
  }
`;

const Latest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Banner = () => {
  const [category, setCategory] = useState(1);

  const sortedCategories = data.sort((a, b) => {
    if (a.category === category && b.category !== category) {
      return -1;
    } else if (a.category !== category && b.category === category) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <HeroBanner>
        <BannerContent>
          <div className='lead'>
            <H1Type>
              Morbi at nunc nec quam pharetra luctus at et risus. Duis sodales sapien sit.
            </H1Type>
            <H2Type>Morbi at nunc nec quam pharetra luctus at et risus.</H2Type>
          </div>
          <div className='categories'>
            <Pill
              id={1}
              text="Category"
              colorScheme="pink"
              onClick={() => setCategory(1)}
            />
            <Pill
              id={2}
              text="Category"
              colorScheme="blue"
              onClick={() => setCategory(2)}
            />
            <Pill
              id={3}
              text="Category"
              colorScheme="green"
              onClick={() => setCategory(3)}
            />
          </div>
        </BannerContent>
      </HeroBanner>
      <Latest>
        <TitleH2>Latest</TitleH2>
        <FormGroup label="Category" id="category" placeholder="e.g 'diet'" />
        <div class="main">
          {sortedCategories.map((item) => (
            <div class="five">
              <CategoryCard key={item.id}>
                <Pill id={item.id} colorScheme={item.colorScheme} text={item.title} />
              </CategoryCard>
            </div>
          ))}
          <div class="two">
            <CategoryCard>
              Item
            </CategoryCard>
          </div>
        </div>
      </Latest>
    </>
  );
};

export default Banner;
