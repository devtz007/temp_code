

/* Import custom components */
import Intro2PagePart from '@/pageParts/intro_home_2-pagePart';
import Counter1PagePart from '@/pageParts/counter_1-pagePart';
import H21PagePart from '@/pageParts/h2_1-pagePart';
import SkillCard1PagePart from '@/pageParts/skill_cards_1-pagePart';
import SignUpCards1PagePart from '@/pageParts/signUp_cards_1-pagePart';
import PersonCards1PagePart from '@/pageParts/person_cards_1-pagePart';
import SearchBar3PagePart from '@/pageParts/search_bar_3-pagePart';
import WorkPaths1Pagepart from '@/pageParts/work_paths_1-pagePart';
import FindCard1PagePart from '@/pageParts/find_cards_1-pagePart';
import TutorExportCard1PagePart from '@/pageParts/tutor_export_card_1-pagePart';

/* Import styles */
import styles from '@/assets/styles/pages/_home_2-page.module.scss';


/**
 * Home1Page is a component representing the header section of a page.
 * It includes a logo, a search bar, navigation links, and language options.
 *
 * @param props - Props for the component.
 * @param props.styles - Additional class names to customize the component's style.
 *
 * @example
 * Here's how to use the component:
 * ```tsx
 * <Home1Page className="custom-class" />
 * ```
 *
 * @returns The header section of the page.
 */

const Home1Page: React.FC<Props> = (props): JSX.Element => {
  const { stylesP } = props;

  const baseStyles: stylesObj = {
    h2: {
      fontSize: '2rem',
      color: 'rgb(38, 38, 38)',
      marginBottom: '10px',
      fontWeight: '700',
      textAlign: 'center',
    },
  };



  return (
    <div className="home_2_page page">
      <Intro2PagePart />
      <div className="sec_1">
        <div className="width_wrapper">
          <Counter1PagePart />
        </div>
      </div>
      <div className={`${styles.what_do_want}  sec_1`}>
        <div className="width_wrapper">
          <H21PagePart
            info={{ text: 'What do you want to learn?' }}
            styles={{
              h2: {
                marginBottom: '50px',
              },
            }}
          />
          <div className={`${styles.what_do_want__cont}`}>
            <SkillCard1PagePart />
            <div className={`${styles.what_do_want__cont__poster}`}></div>
          </div>
        </div>
      </div>
      <div className={`${styles.find_the_right}  sec_1`}>
        <div className={`${styles.width_wrapper} width_wrapper`}>
          <SignUpCards1PagePart />
          <div
            className={`${styles.find_the_right__search_and_link} search_and_link`}
          >
            <SearchBar3PagePart />

            <a
              href="#"
              className={`${styles.find_the_right__search_and_link__browse_all} browse_all`}
            >
              <span> Browse all mentor</span>
            </a>
          </div>
          <PersonCards1PagePart
            stylesP={{
              person_cards_1_pagePart: {
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                backgroundColor: 'transparent',
                border: '1px solid #ECECEC',
                borderRadius: '8px',
              },
              person_cards_1_pagePart__rectangle: {
                display: 'none',
              },
            }}
          />
        </div>
      </div>
      <div className="how_mentor_work sec_1">
        <div className="width_wrapper">
          <WorkPaths1Pagepart />
        </div>
      </div>
      <div className={`${styles.find_mentor} sec_1`}>
        <div className={`${styles.find_mentor__width_wrapper} width_wrapper`}>
          <FindCard1PagePart />
        </div>
      </div>
      <div className={`${styles.tutor_export} sec_1`}>
        <div className={`${styles.tutor_export__width_wrapper} width_wrapper`}>
          <TutorExportCard1PagePart />
        </div>
      </div>
    </div>
  );
};

/* Define data type of props */
interface Props {
  stylesP?: stylesObj;
}

// Setting displayName for better debugging and searching
Home1Page.displayName = 'Home1Page';

export default Home1Page;
