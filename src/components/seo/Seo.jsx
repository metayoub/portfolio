import React, {useEffect} from "react";

export default function Seo({ seo }) {

    useEffect(() => {
        const ogTitle = document.createElement('meta');
        const ogType = document.createElement('meta');
        const ogUrl = document.createElement('meta');
        const ogSiteName = document.createElement('meta');
        const ogDescription = document.createElement('meta');
        const description = document.createElement('meta');

        if(seo?.description) { 
            description.setAttribute('property', 'description');
            description.content= seo?.description;
            document.getElementsByTagName('head')[0].appendChild(description);
        }

        if(seo.title) { 
            document.title=seo.title;
        }
      
        if(seo?.og?.title) { 
          ogTitle.setAttribute('property', 'og:title');
          ogTitle.content= seo?.og?.title;
          document.getElementsByTagName('head')[0].appendChild(ogTitle);
        }

        if(seo?.og?.type) { 
            ogType.setAttribute('property', 'og:type');
            ogType.content= seo?.og?.type;
            document.getElementsByTagName('head')[0].appendChild(ogType);
        }

        if(seo?.og?.url) { 
            ogUrl.setAttribute('property', 'og:url');
            ogUrl.content= seo?.og?.url;
            document.getElementsByTagName('head')[0].appendChild(ogUrl);
        }

        if(seo?.og?.description) { 
            ogDescription.setAttribute('property', 'og:description');
            ogDescription.content= seo?.og?.description;
            document.getElementsByTagName('head')[0].appendChild(ogDescription);
        }

        if(seo?.og?.site_name) { 
            ogSiteName.setAttribute('property', 'og:site_name');
            ogSiteName.content= seo?.og?.site_name;
            document.getElementsByTagName('head')[0].appendChild(ogSiteName);
        }
        return () => {
            [ogTitle, ogType, ogUrl, ogDescription, ogSiteName, description].forEach((item) => {
                item.parentNode.removeChild(item);
            })
        }
        }, [seo]);
    return (
        <div>
          <title>{seo.title}</title>          
          <meta name="description" content={seo?.description} />
          <meta property="og:title" content={seo?.og?.title} />
          <meta property="og:type" content={seo?.og?.type} />
          <meta property="og:url" content={seo?.og?.url} />
          <meta property="og:description" content={seo?.og?.description} />
          <meta property="og:site_name" content={seo?.og?.site_name} />
        </div>
      );
}