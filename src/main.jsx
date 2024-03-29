import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./contexts/AppContext";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { OrderProvider } from "./contexts/OrderContext";
import { PaymentProvider } from "./contexts/PaymentContext";
import { ProductProvider } from "./contexts/ProductContext";
import { UserProvider } from "./contexts/UserContext";
import { CategoriesProvider } from "./contexts/Categories";
import { AnddressProvider } from "./contexts/Anddress";
import {  HistoricProvider } from "./contexts/HistoricContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider>
            <CartProvider>
                <FavoritesProvider>
                    <OrderProvider>
                        <PaymentProvider>
                            <ProductProvider>
                                <UserProvider>
                                    <AnddressProvider>
                                        <CategoriesProvider>
                                            <HistoricProvider>
                                                <App />
                                            </HistoricProvider>
                                        </CategoriesProvider>
                                    </AnddressProvider>
                                </UserProvider>
                            </ProductProvider>
                        </PaymentProvider>
                    </OrderProvider>
                </FavoritesProvider>
            </CartProvider>
        </AppProvider>
    </React.StrictMode>
);
