//before
if(authenticated){
    renderApp();
} else {
    renderLogin();
}

//ternary oparator
authenticated ? renderApp() : renderLogin();