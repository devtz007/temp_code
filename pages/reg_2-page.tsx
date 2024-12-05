/* Import custom components*/
import Reg2PagePart from '@/pageParts/reg_2-pagePart';

/* Import styles */
import styles from '@/assets/styles/pages/_reg_2-page.module.scss';

/**
 * Reg2Page is a component representing the header section of a page.
 * It includes a logo, a search bar, navigation links, and language options.
 *
 * @example
 * Here's how to use the component:
 * ```
 * <Reg2Page />
 * ```
 *
 * @returns The header section of the page.
 */

const Reg2Page: React.FC = (): JSX.Element => {
  return (
    <div className={`${styles.reg_2_page}`}>
      <div className={`${styles.reg_2_page__my_container_1} my_container_1`}>
        <Reg2PagePart />
        <div
          className={`${styles.reg_2_page__my_container_1__image_container_2} image_container_2`}
        >
          <img
            src="/src/assets/media/pageParts/reg_2-pagePart/reg.png"
            alt="registration image"
          />
        </div>
      </div>
    </div>
  );
};


Reg2Page.displayName = 'Reg2Page';

export default Reg2Page;
