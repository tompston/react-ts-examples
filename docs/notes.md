## Other random stuff

    -------
    import React, {useState, useEffect} from "react"
    const fetchURL = "https://jsonplaceholder.typicode.com"
    const App = () => {
    const [data, setData] = useState(null)
    const getData = () =>
        fetch(`${fetchURL}/posts`)
        .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])
    return <div> Fetched data will be displayed here</div>
    }


    ------ Boolean Switch

    // let [navigationIsShown, setState] = useState(false);

    ////  Boolean Switch
    // function ChangeNavigation() {
    //   setState((navigationIsShown = !navigationIsShown));
    //   console.log(navigationIsShown);
    // }

    {
    /* {navigationIsShown ? (
                // if true, return this
                <div>
                <div className="header-navigation-content">
                    <div>this lorem</div>
                    <div>this ipsum</div>
                </div>
                </div>
            ) : (
                // if false, return this
                <span></span>
            )}
            <div>{navigationIsShown.toString()}</div> */
    }




    ---- Conditional component return

    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    // return (
    //   <div>
    //     <Greeting isLoggedIn={isLoggedIn} />
    //     {button}
    //   </div>
    // );


    // # you can spit the function that maps the array into 2 parts
    //
    // --- before the return() block, define a function that maps and returns a single child
    //
    // const listOfArticles = articles.map((a) => {
    //   return (
    //     <div className="py-20 px-14 bord-rad-2 shadow- border-1 fs-9 op-90">
    //       <div>{a.headline}</div>
    //     </div>
    //   );
    // });

    // --- inside the return() block write this
    //
    //  <div className="grid gap-14 gtc-1-1-1">{articles && listOfArticles}</div>
    //
    // articles in this case is the first value in the array of useHook function


    // --- You can also render the isLoading block as a single block.
    //
    // {/* if isLoading = true, return this */}
    // {isLoading && (
    //   <div>
    //     <div className="fs-2 mt-30">loading ... </div>
    //   </div>
    // )}
    // {/* block of articles */}
    // <div>
    //   <div className="grid gap-14 gtc-1-1-1">
    //     {articles.map((a) => {
    //       return (
    //         <div className="py-20 px-14 bord-rad-2 shadow- border-1 fs-9 op-80 single-article-box">
    //           <div>{a.headline}</div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
