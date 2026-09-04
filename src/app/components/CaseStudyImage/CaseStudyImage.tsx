import Image from "next/image"
import styles from "./CaseStudyImage.module.css"

type CaseStudyImageProps = {
  src: string
  alt: string
}

export const CaseStudyImage = ({
  src,
  alt,
}: CaseStudyImageProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 850px"
      />
    </div>
  )
}