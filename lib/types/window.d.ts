interface GtagEventParams {
    [key: string]: string | number | boolean | undefined | GtagEventParams | GtagEventParams[] | null;
  }

  interface Window {
    gtag: (command: string, eventName: string, eventParams?: GtagEventParams) => void;
    dataLayer?: GtagEventParams[];
  }