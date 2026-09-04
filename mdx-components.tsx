import { CaseStudyImage } from "./src/app/components/CaseStudyImage/CaseStudyImage"

export function useMDXComponents(components: any) {
  return {
    ...components,
    CaseStudyImage,
  }
}