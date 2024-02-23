## Slider project

- started 20.02.2024

- main commands for this projects:
  - yarn create react-app my-app --template typescript - **for creating project**;
  - yarn add react-icons @types/react-icons - **for importing icons**
- main mament of project:

  - using fetch function to get data from server. It looks like:

    ```
      async function fetchImages(getUrl: string) {
        try {
          setLoading(true);

      const response = await fetch(`${getUrl}?_limit=${props.limit}`);
      const data: dataType[] = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e: any) {
      setErrorMsg(e.message);
      setLoading(false);
    }
    }

    ```

  - using useEffect that looks like:

    ```
    useEffect(() => {
      if (props.url !== "") fetchImages(props.url);
    }, [props.url]);

    ```

    it means if we get with props url that is not empty we lounch fetching images from the server. and restart in only when change url, that we get from the props (we set it in the dependncy array)
