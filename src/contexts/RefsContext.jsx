import { createContext } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export const RefsContext = createContext({
  contactsRef: null,
  servicesTitleInView: null,
  servicesTitleRef: null,
  heroTitleRef: null,
  aboutTitleRef: null,
  aboutSliderRef: null,
  featuresTitleRef: null,
  worksTitleRef: null,
  heroTitleInView: null,
  aboutTitleInView: null,
  aboutSliderInView: null,
  featuresTitleInView: null,
  worksTitleInView: null,
});

export const RefsContextProvider = ({ children }) => {
  const contactsRef = useRef(null);
  const { ref: servicesTitleRef, inView: servicesTitleInView } = useInView();
  const { ref: heroTitleRef, inView: heroTitleInView } = useInView();
  const { ref: aboutTitleRef, inView: aboutTitleInView } = useInView();
  const { ref: aboutSliderRef, inView: aboutSliderInView } = useInView();
  const { ref: featuresTitleRef, inView: featuresTitleInView } = useInView();
  const { ref: worksTitleRef, inView: worksTitleInView } = useInView();

  const value = {
    contactsRef,
    servicesTitleInView,
    servicesTitleRef,
    heroTitleRef,
    aboutTitleRef,
    aboutSliderRef,
    featuresTitleRef,
    worksTitleRef,
    heroTitleInView,
    aboutTitleInView,
    aboutSliderInView,
    featuresTitleInView,
    worksTitleInView,
  };

  return <RefsContext.Provider value={value}>{children}</RefsContext.Provider>;
};
