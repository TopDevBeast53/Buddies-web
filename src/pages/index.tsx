import { Routes, Route } from 'react-router-dom';
import CollectionPage from './collection';
import HomePage from './home';
import FAQs from './FAQs';
import TokenPage from './token';
import MyOrdersPage from './yourorders';
import FreshOrdersPage from './freshorders';
import FreshTradesPage from './freshtrades';
import { PurchaseDialog, BidDialog } from 'components';
import { CancelDialog } from 'components/CancelDialog/CancelDialog';
import { TransferDialog } from 'components/TransferDiaog/TransferDialog';
import { CollectionListPage } from './collection-list';
import MintPage from './mint';
import MyNFTsPage from './mynfts';
import { SubcollectionListPage } from './subcollection-list';
import AuctionListPage from './auctions';
import MarketplacePage from './marketplace';
import MarketBuddies from './marketbuddies';
import MarketplaceDetail from './marketplacedetail';
export const Routing = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/faqs" element={<FAQs />} />
    <Route path="/marketplace" element={<MarketplacePage />} />
    <Route path="/collections" element={<CollectionListPage />} />
    <Route path="/moonbuddies" element={<MarketBuddies />} />
    <Route path="/buddieDetail" element={<MarketplaceDetail />} />
    <Route
      path="/collection/:type/:address/:subcollectionId"
      element={
        <>
          <PurchaseDialog />
          <CollectionPage />
        </>
      }
    />
    <Route
      path="/token/:type/:address/:id"
      element={
        <>
          <CancelDialog />
          <PurchaseDialog />
          <BidDialog />
          <TransferDialog /> <TokenPage />
        </>
      }
    />
    <Route path="/workbench" element={<MintPage />} />
    <Route
      path="/freshoffers"
      element={
        <>
          <PurchaseDialog /> <FreshOrdersPage />
        </>
      }
    />
    <Route path="/mint" element={<FreshTradesPage />} />
    <Route
      path="/myoffers"
      element={
        <>
          <CancelDialog /> <PurchaseDialog /> <MyOrdersPage />
        </>
      }
    />
    <Route path="/mynfts" element={<MyNFTsPage />} />
    <Route
      path="/subcollections/:address"
      element={<SubcollectionListPage />}
    />
    <Route path="/auctions" element={<AuctionListPage />} />
  </Routes>
);
