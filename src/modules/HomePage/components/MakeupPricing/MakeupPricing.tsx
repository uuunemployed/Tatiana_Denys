import { Sectionheader } from '../../../../components/SectionHeader';
import styles from './MakeupPricing.module.scss';

export function MakeupPricing() {
  const pricingData = {
    planName: "ОДИН ТАРИФ — 10 уроків",
    description: "10 практичних уроків «з нуля» до впевненого щоденного макіяжу.",
    details: [
      { label: "ТРИВАЛІСТЬ", value: "10 днів — 10 практичних уроків" },
      { label: "ДОСТУП ДО УРОКІВ", value: "Одразу після оплати і назавжди" }
    ],
    bonuses: [
      "Чек-лист по пензликах",
      "Чек-лист по доглядових засобах",
      "Чек-лист бюджетної косметики",
      "Чек-лист люксової косметики",
      "Довідник косметики на різний бюджет"
    ],
    currentPrice: "799 грн",
    oldPrice: "1599 грн",
    badge: "✓ Доступ відразу після оплати • Безпечна оплата"
  };

  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__header}>
        {/* <h2 className={styles.pricing__title}>{pricingData.title}</h2> */}
        <Sectionheader title='Варіанти' titleSub='участі'/>
      </div>

      <div className={styles.pricing__card}>
        <div className={styles.pricing__cardInner}>
          <div className={styles.pricing__planInfo}>
            <h3 className={styles.pricing__planTitle}>{pricingData.planName}</h3>
            <p className={styles.pricing__planDesc}>{pricingData.description}</p>
          </div>

          <div className={styles.pricing__details}>
            {pricingData.details.map((detail, idx) => (
              <div key={idx} className={styles.pricing__detailItem}>
                <div className={styles.pricing__detailLabel}>{detail.label}</div>
                <div className={styles.pricing__detailValue}>{detail.value}</div>
              </div>
            ))}

            <div className={styles.pricing__detailItem}>
              <div className={styles.pricing__detailLabel}>БОНУСИ</div>
              <ul className={styles.pricing__bonusList}>
                {pricingData.bonuses.map((bonus, idx) => (
                  <li key={idx} className={styles.pricing__bonusItem}>
                    <span>•</span>
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.pricing__divider} />

          <div className={styles.pricing__priceRow}>
            <div className={styles.pricing__priceCurrent}>{pricingData.currentPrice}</div>
            <div className={styles.pricing__priceOld}>{pricingData.oldPrice}</div>
          </div>

          <button className={styles.pricing__cta}>
            Почати навчання
          </button>
        </div>
      </div>

      <div className={styles.pricing__trustBadge}>
        {pricingData.badge}
      </div>
    </section>
  );
}