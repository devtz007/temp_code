import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

/* Import functional components */
import StylesMerger1Func from '@/functions/styles_merger_1-func';

/* Import custom components */
import Banner1PagePart from '@/pageParts/banner_1-pagePart';
import SearchFilters2PagePart from '@/pageParts/search_filters_2-pagePart';
import SearchBar3PagePart from '@/pageParts/search_bar_3-pagePart';
import TagsSlider1PagePart from '@/pageParts/tags_slider_1-pagePart';
import ReviewCards2PagePart from '@/pageParts/person_cards_2-pagePart';
import TutorExportCard1PagePart from '@/pageParts/tutor_export_card_1-pagePart';

/* Import styles */
import styles from '@/assets/styles/pages/_tutor_finder_2-page.module.scss';

/**
 * TutorFinder2Page is a component representing the header section of a page.
 * It includes a logo, a search bar, navigation links, and language options.
 *
 * @param props - Props for the component.
 * @example
 * Here's how to use the component:
 * ```tsx
 * <TutorFinder2Page className="custom-class" />
 * ```
 *
 * @returns The header section of the page.
 */

const TutorFinder2Page: React.FC<Props> = (props): JSX.Element => {
  const { stylesP, info } = props;
  const [searchParams] = useSearchParams();

  const [cardsData, setCardsData] = useState([]);
  const [error, setError] = useState(null);

  const cardsPerPage = 4;
  const pagesCount = Math.ceil(cardsData.length / cardsPerPage);

  const callOnPage = (data: any) => {
    console.log(data);
    // You can uncomment and implement the POST request if needed
    /*
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    */
  };

  const baseStyles = {
    tutorFinder1Page: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    error: {
      color: 'red',
    },
  };

  // Merge base styles with any additional styles provided via props styles
  const mS: stylesObj = stylesP
    ? StylesMerger1Func(baseStyles, stylesP)
    : baseStyles;

  return (
    <div className={`${styles.tutor_finder_2_page} tutor_finder_2_page`}>
      <div
        className={`${styles.tutor_finder_banner_container} banner_container_1`}
      >
        <div className="width-wrapper">
          <Banner1PagePart />
        </div>
      </div>
      <div className={`${styles.filter_container} my_container_1`}>
        <div
          className={`${styles['filter_container__width-wrapper']} width-wrapper`}
        >
          <SearchBar3PagePart />
          <SearchFilters2PagePart />
          <TagsSlider1PagePart />
        </div>
      </div>
      <div className={`${styles.result_container} my_container_1`}>
        <div className="width-wrapper">
          <ReviewCards2PagePart />
        </div>
      </div>
      <div className={` my_container_1`}>
        <div className="width-wrapper">
          <TutorExportCard1PagePart
            info={{
              items: [
                {
                  heading: 'Become a mentor & Share your knowledge',
                  text: 'Be the part of the community and share your experiences.',
                  buttonLink: '#',
                  buttonText: 'Become a mentor',
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* Define data type of props */
interface Props {
  info?: object;
  stylesP?: stylesObj;
}

// Setting displayName for better debugging and searching
TutorFinder2Page.displayName = 'TutorFinder2Page';

export default TutorFinder2Page;
