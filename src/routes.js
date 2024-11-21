// src/routes.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GenericProvider from './context/GenericContext';
import SecondaryProvider from './context/SecondaryContext';
import GenericPaginationProvider from './context/GenericPaginationContext';
import Layout from './components/Layout';

const UserTable = lazy(() => import('./components/user/UserTable'));
const AddUser = lazy(() => import('./components/user/AddUser'));
const UpdateUser = lazy(() => import('./components/user/UpdateUser'));

const PostTable = lazy(() => import('./components/posts/PostTable'));
const AddPost = lazy(() => import('./components/posts/AddPost'));
const UpdatePost = lazy(() => import('./components/posts/UpdatePost'));


const MpadjreasoncodesTable = lazy(() => import('./components/config/Mpadjreasoncodes/MpadjreasoncodesTable'));
const AddMpadjreasoncodes = lazy(() => import('./components/config/Mpadjreasoncodes/AddMpadjreasoncodes'));
const UpdateMpadjreasoncodes = lazy(() => import('./components/config/Mpadjreasoncodes/UpdateMpadjreasoncodes'));

const MpheaderTablesTable = lazy(() => import('./components/config/MpheaderTables/MpheaderTablesTable'));
const AddMpheaderTables = lazy(() => import('./components/config/MpheaderTables/AddMpheaderTable'));
const UpdateMpheaderTables = lazy(() => import('./components/config/MpheaderTables/UpdateMpheaderTable'));

const Mpi21blenddemandordertypesTable = lazy(() => import('./components/config/Mpi21blenddemandordertypes/Mpi21blenddemandordertypesTable'));
const AddMpi21blenddemandordertypes = lazy(() => import('./components/config/Mpi21blenddemandordertypes/AddMpi21blenddemandordertypes'));
const UpdateMpi21blenddemandordertypes = lazy(() => import('./components/config/Mpi21blenddemandordertypes/UpdateMpi21blenddemandordertypes'));

const Mpi21blenddemandsetupsTable = lazy(() => import('./components/config/Mpi21blenddemandsetups/Mpi21blenddemandsetupsTable'));
const AddMpi21blenddemandsetups = lazy(() => import('./components/config/Mpi21blenddemandsetups/AddMpi21blenddemandsetups'));
const UpdateMpi21blenddemandsetups = lazy(() => import('./components/config/Mpi21blenddemandsetups/UpdateMpi21blenddemandsetups'));

const Mpi21blenddemandsitewhsesTable = lazy(() => import('./components/config/Mpi21blenddemandsitewhses/Mpi21blenddemandsitewhsesTable'));
const AddMpi21blenddemandsitewhses = lazy(() => import('./components/config/Mpi21blenddemandsitewhses/AddMpi21blenddemandsitewhses'));
const UpdateMpi21blenddemandsitewhses = lazy(() => import('./components/config/Mpi21blenddemandsitewhses/UpdateMpi21blenddemandsitewhses'));

const Mpi21ictransfersetupsTable = lazy(() => import('./components/config/Mpi21ictransfersetups/Mpi21ictransfersetupsTable'));
const AddMpi21ictransfersetups = lazy(() => import('./components/config/Mpi21ictransfersetups/AddMpi21ictransfersetups'));
const UpdateMpi21ictransfersetups = lazy(() => import('./components/config/Mpi21ictransfersetups/UpdateMpi21ictransfersetups'));

const Mpi21inventorymovementsetupsTable = lazy(() => import('./components/config/Mpi21inventorymovementsetups/Mpi21inventorymovementsetupsTable'));
const AddMpi21inventorymovementsetups = lazy(() => import('./components/config/Mpi21inventorymovementsetups/AddMpi21inventorymovementsetups'));
const UpdateMpi21inventorymovementsetups = lazy(() => import('./components/config/Mpi21inventorymovementsetups/UpdateMpi21inventorymovementsetups'));

const Mpi21locationtypesTable = lazy(() => import('./components/config/Mpi21locationtypes/Mpi21locationtypesTable'));
const AddMpi21locationtypes = lazy(() => import('./components/config/Mpi21locationtypes/AddMpi21locationtypes'));
const UpdateMpi21locationtypes = lazy(() => import('./components/config/Mpi21locationtypes/UpdateMpi21locationtypes'));

const Mpi21StockfeeditemlocationsTable = lazy(() => import('./components/config/Mpi21Stockfeeditemlocations/Mpi21StockfeeditemlocationsTable'));
const AddMpi21Stockfeeditemlocations = lazy(() => import('./components/config/Mpi21Stockfeeditemlocations/AddMpi21Stockfeeditemlocations'));
const UpdateMpi21Stockfeeditemlocations = lazy(() => import('./components/config/Mpi21Stockfeeditemlocations/UpdateMpi21Stockfeeditemlocations'));

const Mpi21StockfeeditemwarehousesTable = lazy(() => import('./components/config/Mpi21Stockfeeditemwarehouses/Mpi21StockfeeditemwarehousesTable'));
const AddMpi21Stockfeeditemwarehouses = lazy(() => import('./components/config/Mpi21Stockfeeditemwarehouses/AddMpi21Stockfeeditemwarehouses'));
const UpdateMpi21Stockfeeditemwarehouses = lazy(() => import('./components/config/Mpi21Stockfeeditemwarehouses/UpdateMpi21Stockfeeditemwarehouses'));

const Mpi21subwipconsitemgroupsTable = lazy(() => import('./components/config/Mpi21subwipconsitemgroups/Mpi21subwipconsitemgroupsTable'));
const AddMpi21subwipconsitemgroups = lazy(() => import('./components/config/Mpi21subwipconsitemgroups/AddMpi21subwipconsitemgroups'));
const UpdateMpi21subwipconsitemgroups = lazy(() => import('./components/config/Mpi21subwipconsitemgroups/UpdateMpi21subwipconsitemgroups'));

const Mpi21subwipconssetupheadersTable = lazy(() => import('./components/config/Mpi21subwipconssetupheaders/Mpi21subwipconssetupheadersTable'));
const AddMpi21subwipconssetupheaders = lazy(() => import('./components/config/Mpi21subwipconssetupheaders/AddMpi21subwipconssetupheaders'));
const UpdateMpi21subwipconssetupheaders = lazy(() => import('./components/config/Mpi21subwipconssetupheaders/UpdateMpi21subwipconssetupheaders'));

const Mpi21subwipconssitewhsesTable = lazy(() => import('./components/config/Mpi21subwipconssitewhses/Mpi21subwipconssitewhsesTable'));
const AddMpi21subwipconssitewhses = lazy(() => import('./components/config/Mpi21subwipconssitewhses/AddMpi21subwipconssitewhses'));
const UpdateMpi21subwipconssitewhses = lazy(() => import('./components/config/Mpi21subwipconssitewhses/UpdateMpi21subwipconssitewhses'));

const Mpi21subwipexcludeitemsTable = lazy(() => import('./components/config/Mpi21subwipexcludeitems/Mpi21subwipexcludeitemsTable'));
const AddMpi21subwipexcludeitems = lazy(() => import('./components/config/Mpi21subwipexcludeitems/AddMpi21subwipexcludeitems'));
const UpdateMpi21subwipexcludeitems = lazy(() => import('./components/config/Mpi21subwipexcludeitems/UpdateMpi21subwipexcludeitems'));

const Mpi21subwipproditemgroupsTable = lazy(() => import('./components/config/Mpi21subwipproditemgroups/Mpi21subwipproditemgroupsTable'));
const AddMpi21subwipproditemgroups = lazy(() => import('./components/config/Mpi21subwipproditemgroups/AddMpi21subwipproditemgroups'));
const UpdateMpi21subwipproditemgroups = lazy(() => import('./components/config/Mpi21subwipproditemgroups/UpdateMpi21subwipproditemgroups'));

const Mpi21vendorentitytablesTable = lazy(() => import('./components/config/Mpi21vendorentitytables/Mpi21vendorentitytablesTable'));
const AddMpi21vendorentitytables = lazy(() => import('./components/config/Mpi21vendorentitytables/AddMpi21vendorentitytables'));
const UpdateMpi21vendorentitytables = lazy(() => import('./components/config/Mpi21vendorentitytables/UpdateMpi21vendorentitytables'));

const Mpi21vendorreferencesTable = lazy(() => import('./components/config/Mpi21vendorreferences/Mpi21vendorreferencesTable'));
const AddMpi21vendorreferences = lazy(() => import('./components/config/Mpi21vendorreferences/AddMpi21vendorreferences'));
const UpdateMpi21vendorreferences = lazy(() => import('./components/config/Mpi21vendorreferences/UpdateMpi21vendorreferences'));

const MpinterfaceparametersTable = lazy(() => import('./components/config/Mpinterfaceparameters/MpinterfaceparametersTable'));
const AddMpinterfaceparameters = lazy(() => import('./components/config/Mpinterfaceparameters/AddMpinterfaceparameters'));
const UpdateMpinterfaceparameters = lazy(() => import('./components/config/Mpinterfaceparameters/UpdateMpinterfaceparameters'));

const Mpvendorsubgrouptables = lazy(() => import('./components/config/Mpvendorsubgrouptables/MpvendorsubgrouptablesTable'));
const AddMpvendorsubgrouptables = lazy(() => import('./components/config/Mpvendorsubgrouptables/AddMpvendorsubgrouptables'));
const UpdateMpvendorsubgrouptables = lazy(() => import('./components/config/Mpvendorsubgrouptables/UpdateMpvendorsubgrouptables'));

const UpdateMpi21blenddemanditemgroup = lazy(() => import('./components/config/Mpi21blenddemanditemgroup/UpdateMpi21blenddemanditemgroup'));
const Mpi21blenddemanditemgroup = lazy(() => import('./components/config/Mpi21blenddemanditemgroup/Mpi21blenddemanditemgroupTable'));
const Addmpi21blenddemanditemgroup = lazy(() => import('./components/config/Mpi21blenddemanditemgroup/AddMpi21blenddemanditemgroup'));

const Mpi21rawmatdemandordertype = lazy(() => import('./components/config/Mpi21rawmatdemandordertype/Mpi21rawmatdemandordertypeTable'));
const AddMpi21rawmatdemandordertype = lazy(() => import('./components/config/Mpi21rawmatdemandordertype/AddMpi21rawmatdemandordertype'));
const UpdateMpi21rawmatdemandordertype = lazy(() => import('./components/config/Mpi21rawmatdemandordertype/UpdateMpi21rawmatdemandordertype'));

const Mpi21rawmatdemandsetup = lazy(() => import('./components/config/Mpi21rawmatdemandsetup/Mpi21rawmatdemandsetupTables'));
const AddMpi21rawmatdemandsetup = lazy(() => import('./components/config/Mpi21rawmatdemandsetup/AddMpi21rawmatdemandsetup'));
const UpdateMpi21rawmatdemandsetup = lazy(() => import('./components/config/Mpi21rawmatdemandsetup/UpdateMpi21rawmatdemandsetup'));

const Wrkctrcapabilityresources = lazy(() => import('./components/config/Wrkctrcapabilityresources/WrkctrcapabilityresourcesTable'));
const Addwrkctrcapabilityresources = lazy(() => import('./components/config/Wrkctrcapabilityresources/AddWrkctrcapabilityresources'));
const Updatewrkctrcapabilityresources = lazy(() => import('./components/config/Wrkctrcapabilityresources/UpdateWrkctrcapabilityresources'));

const Routeoprtables = lazy(() => import('./components/config/Routeoprtables/RouteoprtablesTable'));
const Addrouteoprtables = lazy(() => import('./components/config/Routeoprtables/AddRouteoprtables'));
const Updaterouteoprtables = lazy(() => import('./components/config/Routeoprtables/UpdateRouteoprtables'));

const Wrkctrcapabilities = lazy(() => import('./components/config/Wrkctrcapabilities/WrkctrcapabilitiesTable'));
const Addwrkctrcapabilities = lazy(() => import('./components/config/Wrkctrcapabilities/AddWrkctrcapabilities'));
const Updatewrkctrcapabilities = lazy(() => import('./components/config/Wrkctrcapabilities/UpdateWrkctrcapabilities'));

const Tmsparameters = lazy(() => import('./components/config/Tmsparameters/TmsparametersTable'));
const Addtmsparameters = lazy(() => import('./components/config/Tmsparameters/AddTmsparameters'));
const Updatetmsparameters = lazy(() => import('./components/config/Tmsparameters/UpdateTmsparameters'));

const Processingstatus = lazy(() => import('./components/config/Processingstatus/ProcessingstatusTable'));
const Addprocessingstatus = lazy(() => import('./components/config/Processingstatus/AddProcessingstatus'));
const Updateprocessingstatus = lazy(() => import('./components/config/Processingstatus/UpdateProcessingstatus'));

const Mpinterfaces = lazy(() => import('./components/config/Mpinterfaces/MpinterfacesTable'));
const Addmpinterfaces = lazy(() => import('./components/config/Mpinterfaces/AddMpinterfaces'));
const Updatempinterfaces = lazy(() => import('./components/config/Mpinterfaces/UpdateMpinterfaces'));

const Mpinterfacelegacyids = lazy(() => import('./components/config/Mpinterfacelegacyids/MpinterfacelegacyidsTable'));
const Addmpinterfacelegacyids = lazy(() => import('./components/config/Mpinterfacelegacyids/AddMpinterfacelegacyids'));
const Updatempinterfacelegacyids = lazy(() => import('./components/config/Mpinterfacelegacyids/UpdateMpinterfacelegacyids'));

const MplogilityCustReditrectRefs = lazy(() => import('./components/config/MplogilityCustReditrectRefs/MplogilityCustReditrectRefsTable'));
const AddmplogilityCustReditrectRefs = lazy(() => import('./components/config/MplogilityCustReditrectRefs/AddMplogilityCustReditrectRefs'));
const UpdatemplogilityCustReditrectRefs = lazy(() => import('./components/config/MplogilityCustReditrectRefs/UpdateMplogilityCustReditrectRefs'));

const MpprobatdmslocationsTable = lazy(() => import('./components/config/Mpprobatdmslocations/MpprobatdmslocationsTable'));
const AddMpprobatdmslocations = lazy(() => import('./components/config/Mpprobatdmslocations/AddMpprobatdmslocations'));
const UpdateMpprobatdmslocations = lazy(() => import('./components/config/Mpprobatdmslocations/UpdateMpprobatdmslocations'));

const MpprobatlocationsTable = lazy(() => import('./components/config/Mpprobatlocations/MpprobatlocationsTable'));
const AddMpprobatlocations = lazy(() => import('./components/config/Mpprobatlocations/AddMpprobatlocations'));
const UpdateMpprobatlocations = lazy(() => import('./components/config/Mpprobatlocations/UpdateMpprobatlocations'));

const MplogilityinterfaceexportinclitemgroupsTable = lazy(() => import('./components/config/Mplogilityinterfaceexportinclitemgroups/MplogilityinterfaceexportinclitemgroupsTable'));
const AddMplogilityinterfaceexportinclitemgroups = lazy(() => import('./components/config/Mplogilityinterfaceexportinclitemgroups/AddMplogilityinterfaceexportinclitemgroups'));
const UpdateMplogilityinterfaceexportinclitemgroups = lazy(() => import('./components/config/Mplogilityinterfaceexportinclitemgroups/UpdateMplogilityinterfaceexportinclitemgroups'));

const Mpi21rawmatdemandsitewhseTable = lazy(() => import('./components/config/Mpi21rawmatdemandsitewhse/Mpi21rawmatdemandsitewhseTable'));
const AddMpi21rawmatdemandsitewhse = lazy(() => import('./components/config/Mpi21rawmatdemandsitewhse/AddMpi21rawmatdemandsitewhse'));
const UpdateMpi21rawmatdemandsitewhse = lazy(() => import('./components/config/Mpi21rawmatdemandsitewhse/UpdateMpi21rawmatdemandsitewhse'));

const Mpi21rawmatdemanditemgroupTable = lazy(() => import('./components/config/Mpi21rawmatdemanditemgroup/Mpi21rawmatdemanditemgroupTable'));
const AddMpi21rawmatdemanditemgroup = lazy(() => import('./components/config/Mpi21rawmatdemanditemgroup/AddMpi21rawmatdemanditemgroup'));
const UpdateMpi21rawmatdemanditemgroup = lazy(() => import('./components/config/Mpi21rawmatdemanditemgroup/UpdateMpi21rawmatdemanditemgroup'));

const MplogilityinterfaceexportexclcustomersTable = lazy(() => import('./components/config/Mplogilityinterfaceexportexclcustomers/MplogilityinterfaceexportexclcustomersTable'));
const AddMplogilityinterfaceexportexclcustomers = lazy(() => import('./components/config/Mplogilityinterfaceexportexclcustomers/AddMplogilityinterfaceexportexclcustomers'));
const UpdateMplogilityinterfaceexportexclcustomers = lazy(() => import('./components/config/Mplogilityinterfaceexportexclcustomers/UpdateMplogilityinterfaceexportexclcustomers'));

const Mpavebommasterheaders = lazy(() => import('./components/header/Mpavebommasterheaders/MpavebommasterheadersTable'));
const AddMpavebommasterheaders = lazy(() => import('./components/header/Mpavebommasterheaders/AddMpavebommasterheaders'));
const UpdateMpavebommasterheaders = lazy(() => import('./components/header/Mpavebommasterheaders/UpdateMpavebommasterheaders'));

const Mpaveinventoryinterfaceheaders = lazy(() => import('./components/header/Mpaveinventoryinterfaceheaders/MpaveinventoryinterfaceheadersTable'));
const AddMpaveinventoryinterfaceheaders = lazy(() => import('./components/header/Mpaveinventoryinterfaceheaders/AddMpaveinventoryinterfaceheaders'));
const UpdateMpaveinventoryinterfaceheaders = lazy(() => import('./components/header/Mpaveinventoryinterfaceheaders/UpdateMpaveinventoryinterfaceheaders'));


const Mpaveinvtransferheaders = lazy(() => import('./components/header/Mpaveinvtransferheaders/MpaveinvtransferheadersTable'));
const AddMpaveinvtransferheaders = lazy(() => import('./components/header/Mpaveinvtransferheaders/AddMpaveinvtransferheaders'));
const UpdateMpaveinvtransferheaders = lazy(() => import('./components/header/Mpaveinvtransferheaders/UpdateMpaveinvtransferheaders'));



const Mpaveitemmasterheaders = lazy(() => import('./components/header/Mpaveitemmasterheaders/MpaveitemmasterheadersTable'));
const AddMpaveitemmasterheaders = lazy(() => import('./components/header/Mpaveitemmasterheaders/AddMpaveitemmasterheaders'));
const UpdateMpaveitemmasterheaders = lazy(() => import('./components/header/Mpaveitemmasterheaders/UpdateMpaveitemmasterheaders'));



const Mpavelotmixings = lazy(() => import('./components/header/Mpavelotmixings/MpavelotmixingsTable'));
const AddMpavelotmixings = lazy(() => import('./components/header/Mpavelotmixings/AddMpavelotmixings'));
const UpdateMpavelotmixings = lazy(() => import('./components/header/Mpavelotmixings/UpdateMpavelotmixings'));

const Mpaveordercompleteheaders = lazy(() => import('./components/header/Mpaveordercompleteheaders/MpaveordercompleteheaderTable'));
const AddMpaveordercompleteheaders = lazy(() => import('./components/header/Mpaveordercompleteheaders/AddMpaveordercompleteheader'));
const UpdateMpaveordercompleteheaders = lazy(() => import('./components/header/Mpaveordercompleteheaders/UpdateMpaveordercompleteheader'));


const Mpaveprobatgroundcoffeestagings = lazy(() => import('./components/header/Mpaveprobatgroundcoffeestagings/MpaveprobatgroundcoffeestagingsTable'));
const AddMpaveprobatgroundcoffeestagings = lazy(() => import('./components/header/Mpaveprobatgroundcoffeestagings/AddMpaveprobatgroundcoffeestagings'));
const UpdateMpaveprobatgroundcoffeestagings = lazy(() => import('./components/header/Mpaveprobatgroundcoffeestagings/UpdateMpaveprobatgroundcoffeestagings'));

const Mpaveprodorderpickingheaders = lazy(() => import('./components/header/Mpaveprodorderpickingheaders/MpaveprodorderpickingheadersTable'));
const AddMpaveprodorderpickingheaders = lazy(() => import('./components/header/Mpaveprodorderpickingheaders/AddMpaveprodorderpickingheaders'));
const UpdateMpaveprodorderpickingheaders = lazy(() => import('./components/header/Mpaveprodorderpickingheaders/UpdateMpaveprodorderpickingheaders'));


const Mpaveprodorderrafheaders = lazy(() => import('./components/header/Mpaveprodorderrafheaders/MpaveprodorderrafheadersTable'));
const AddMpaveprodorderrafheaders = lazy(() => import('./components/header/Mpaveprodorderrafheaders/AddMpaveprodorderrafheaders'));
const UpdateMpaveprodorderrafheaders = lazy(() => import('./components/header/Mpaveprodorderrafheaders/UpdateMpaveprodorderrafheaders'));


const Mpaverafexporteds = lazy(() => import('./components/header/Mpaverafexporteds/MpaverafexportedsTable'));
const AddMpaverafexporteds = lazy(() => import('./components/header/Mpaverafexporteds/AddMpaverafexporteds'));
const UpdateMpaverafexporteds = lazy(() => import('./components/header/Mpaverafexporteds/UpdateMpaverafexporteds'));

const Mpaveworkorderheaders = lazy(() => import('./components/header/Mpaveworkorderheaders/MpaveworkorderheadersTable'));
const AddMpaveworkorderheaders = lazy(() => import('./components/header/Mpaveworkorderheaders/AddMpaveworkorderheaders'));
const UpdateMpaveworkorderheaders = lazy(() => import('./components/header/Mpaveworkorderheaders/UpdateMpaveworkorderheaders'));

const Mpi21inventorymovementheaders = lazy(() => import('./components/header/Mpi21inventorymovementheaders/Mpi21inventorymovementheadersTable'));
const AddMpi21inventorymovementheaders = lazy(() => import('./components/header/Mpi21inventorymovementheaders/AddMpi21inventorymovementheaders'));
const UpdateMpi21inventorymovementheaders = lazy(() => import('./components/header/Mpi21inventorymovementheaders/UpdateMpi21inventorymovementheaders'));

const Mpi21itemmasterheaders = lazy(() => import('./components/header/Mpi21itemmasterheaders/Mpi21itemmasterheadersTable'));
const AddMpi21itemmasterheaders = lazy(() => import('./components/header/Mpi21itemmasterheaders/AddMpi21itemmasterheaders'));
const UpdateMpi21itemmasterheaders = lazy(() => import('./components/header/Mpi21itemmasterheaders/UpdateMpi21itemmasterheaders'));

const Mpi21prodconsoutputinheaders = lazy(() => import('./components/header/Mpi21prodconsoutputinheaders/Mpi21prodconsoutputinheadersTable'));
const AddMpi21prodconsoutputinheaders = lazy(() => import('./components/header/Mpi21prodconsoutputinheaders/AddMpi21prodconsoutputinheaders'));
const UpdateMpi21prodconsoutputinheaders = lazy(() => import('./components/header/Mpi21prodconsoutputinheaders/UpdateMpi21prodconsoutputinheaders'));


const Mpi21prodorderinheaders = lazy(() => import('./components/header/Mpi21prodorderinheaders/Mpi21prodorderinheadersTable'));
const AddMpi21prodorderinheaders = lazy(() => import('./components/header/Mpi21prodorderinheaders/AddMpi21prodorderinheaders'));
const UpdateMpi21prodorderinheaders = lazy(() => import('./components/header/Mpi21prodorderinheaders/UpdateMpi21prodorderinheaders'));

const Mpi21recipeheaders = lazy(() => import('./components/header/Mpi21recipeheaders/Mpi21recipeheadersTable'));
const AddMpi21recipeheaders = lazy(() => import('./components/header/Mpi21recipeheaders/AddMpi21recipeheaders'));
const UpdateMpi21recipeheaders = lazy(() => import('./components/header/Mpi21recipeheaders/UpdateMpi21recipeheaders'));

const Mpi21routeheaders = lazy(() => import('./components/header/Mpi21routeheaders/Mpi21routeheadersTable'));
const AddMpi21routeheaders = lazy(() => import('./components/header/Mpi21routeheaders/AddMpi21routeheaders'));
const UpdateMpi21routeheaders = lazy(() => import('./components/header/Mpi21routeheaders/UpdateMpi21routeheaders'));


const Mpi21transferinterandintraheaderTable = lazy(() => import('./components/header/Mpi21transferinterandintraheader/Mpi21transferinterandintraheaderTable'));
const AddMpi21transferinterandintraheader = lazy(() => import('./components/header/Mpi21transferinterandintraheader/AddMpi21transferinterandintraheader'));
const UpdateMpi21transferinterandintraheader = lazy(() => import('./components/header/Mpi21transferinterandintraheader/UpdateMpi21transferinterandintraheader'));


const Mpi21StockfeedTable = lazy(() => import('./components/header/Mpi21Stockfeed/Mpi21StockfeedTable'));
const AddMpi21Stockfeed = lazy(() => import('./components/header/Mpi21Stockfeed/AddMpi21Stockfeed'));
const UpdateMpi21Stockfeed = lazy(() => import('./components/header/Mpi21Stockfeed/UpdateMpi21Stockfeed'));


const Mpi21QuantityadjustmentTable = lazy(() => import('./components/header/Mpi21Quantityadjustment/Mpi21QuantityadjustmentTable'));
const AddMpi21Quantityadjustment = lazy(() => import('./components/header/Mpi21Quantityadjustment/AddMpi21Quantityadjustment'));
const UpdateMpi21Quantityadjustment = lazy(() => import('./components/header/Mpi21Quantityadjustment/UpdateMpi21Quantityadjustment'));


const Mpi21storageunitheaderTable = lazy(() => import('./components/header/Mpi21storageunitheader/Mpi21storageunitheaderTable'));
const AddMpi21storageunitheader = lazy(() => import('./components/header/Mpi21storageunitheader/AddMpi21storageunitheader'));
const UpdateMpi21storageunitheader = lazy(() => import('./components/header/Mpi21storageunitheader/UpdateMpi21storageunitheader'));


const Mpi21subwipconsumptionTable = lazy(() => import('./components/header/Mpi21subwipconsumption/Mpi21subwipconsumptionTable'));
const AddMpi21subwipconsumption = lazy(() => import('./components/header/Mpi21subwipconsumption/AddMpi21subwipconsumption'));
const UpdateMpi21subwipconsumption = lazy(() => import('./components/header/Mpi21subwipconsumption/UpdateMpi21subwipconsumption'));


const MpinterfaceNotesTable = lazy(() => import('./components/header/MpinterfaceNotes/MpinterfaceNotesTable'));
const AddMpinterfaceNotes = lazy(() => import('./components/header/MpinterfaceNotes/AddMpinterfaceNotes'));
const UpdateMpinterfaceNotes = lazy(() => import('./components/header/MpinterfaceNotes/UpdateMpinterfaceNotes'));

const MppaymentOutboundDataContractTable = lazy(() => import('./components/header/MppaymentOutboundDataContract/MppaymentOutboundDataContractTable'));
const AddMppaymentOutboundDataContract = lazy(() => import('./components/header/MppaymentOutboundDataContract/AddMppaymentOutboundDataContract'));
const UpdateMppaymentOutboundDataContract = lazy(() => import('./components/header/MppaymentOutboundDataContract/UpdateMppaymentOutboundDataContract'));

const MpwebsettlemappingtableTable = lazy(() => import('./components/header/Mpwebsettlemappingtable/MpwebsettlemappingtableTable'));
const AddMpwebsettlemappingtable = lazy(() => import('./components/header/Mpwebsettlemappingtable/AddMpwebsettlemappingtable'));
const UpdateMpwebsettlemappingtable = lazy(() => import('./components/header/Mpwebsettlemappingtable/UpdateMpwebsettlemappingtable'));


const Mpi21storageunitexportstatuss = lazy(() => import('./components/header/Mpi21storageunitexportstatuss/Mpi21storageunitexportstatussTable'));
const AddMpi21storageunitexportstatuss = lazy(() => import('./components/header/Mpi21storageunitexportstatuss/AddMpi21storageunitexportstatuss'));
const UpdateMpi21storageunitexportstatuss = lazy(() => import('./components/header/Mpi21storageunitexportstatuss/UpdateMpi21storageunitexportstatuss'));



const MpinterfaceEndProductions = lazy(() => import('./components/header/MpinterfaceEndProductions/MpinterfaceEndProductionsTable'));
const AddMpinterfaceEndProductions = lazy(() => import('./components/header/MpinterfaceEndProductions/AddMpinterfaceEndProductions'));
const UpdateMpinterfaceEndProductions = lazy(() => import('./components/header/MpinterfaceEndProductions/UpdateMpinterfaceEndProductions'));


const Mpinterfaceitemtables = lazy(() => import('./components/header/Mpinterfaceitemtables/MpinterfaceitemtablesTable'));
const AddMpinterfaceitemtables = lazy(() => import('./components/header/Mpinterfaceitemtables/AddMpinterfaceitemtables'));
const UpdateMpinterfaceitemtables = lazy(() => import('./components/header/Mpinterfaceitemtables/UpdateMpinterfaceitemtables'));

const MpinterfaceMatConsTables = lazy(() => import('./components/header/MpinterfaceMatConsTables/MpinterfaceMatConsTablesTable'));
const AddMpinterfaceMatConsTables = lazy(() => import('./components/header/MpinterfaceMatConsTables/AddMpinterfaceMatConsTables'));
const UpdateMpinterfaceMatConsTables = lazy(() => import('./components/header/MpinterfaceMatConsTables/UpdateMpinterfaceMatConsTables'));

const Mpinterfaceprodtables = lazy(() => import('./components/header/Mpinterfaceprodtables/MpinterfaceprodtablesTable'));
const AddMpinterfaceprodtables = lazy(() => import('./components/header/Mpinterfaceprodtables/AddMpinterfaceprodtables'));
const UpdateMpinterfaceprodtables = lazy(() => import('./components/header/Mpinterfaceprodtables/UpdateMpinterfaceprodtables'));

const MpinterfaceTransferOrders = lazy(() => import('./components/header/MpinterfaceTransferOrders/MpinterfaceTransferOrdersTable'));
const AddMpinterfaceTransferOrders = lazy(() => import('./components/header/MpinterfaceTransferOrders/AddMpinterfaceTransferOrders'));
const UpdateMpinterfaceTransferOrders = lazy(() => import('./components/header/MpinterfaceTransferOrders/UpdateMpinterfaceTransferOrders'));

const Mpinventtranstracking_Exporttransferords = lazy(() => import('./components/header/Mpinventtranstracking_Exporttransferords/Mpinventtranstracking_ExporttransferordsTable'));
const AddMpinventtranstracking_Exporttransferords = lazy(() => import('./components/header/Mpinventtranstracking_Exporttransferords/AddMpinventtranstracking_Exporttransferords'));
const UpdateMpinventtranstracking_Exporttransferords = lazy(() => import('./components/header/Mpinventtranstracking_Exporttransferords/UpdateMpinventtranstracking_Exporttransferords'));

const Mporderplanmappingtables = lazy(() => import('./components/header/Mporderplanmappingtables/MporderplanmappingtablesTable'));
const AddMporderplanmappingtables = lazy(() => import('./components/header/Mporderplanmappingtables/AddMporderplanmappingtables'));
const UpdateMporderplanmappingtables = lazy(() => import('./components/header/Mporderplanmappingtables/UpdateMporderplanmappingtables'));
//Ritambhara merge

const MpinterfaceLocationInventoryTable = lazy(() => import('./components/header/MpinterfaceLocationInventory/MpinterfaceLocationInventoryTable'));
const AddMpinterfaceLocationInventory = lazy(() => import('./components/header/MpinterfaceLocationInventory/AddMpinterfaceLocationInventory'));
const UpdateMpinterfaceLocationInventory = lazy(() => import('./components/header/MpinterfaceLocationInventory/UpdateMpinterfaceLocationInventory'));

const MpinterfaceItemReceiptTable = lazy(() => import('./components/header/MpinterfaceItemReceipts/MpinterfaceItemReceiptsTable'));
const AddMpinterfaceItemReceipt = lazy(() => import('./components/header/MpinterfaceItemReceipts/AddMpinterfaceItemReceipts'));
const UpdateMpinterfaceItemReceipt = lazy(() => import('./components/header/MpinterfaceItemReceipts/UpdateMpinterfaceItemReceipts'));

const MpinterfaceDemandForecastTable = lazy(() => import('./components/header/MpinterfaceDemandForecast/MpinterfaceDemandForecastTable'));
const AddMpinterfaceDemandForecast = lazy(() => import('./components/header/MpinterfaceDemandForecast/AddMpinterfaceDemandForecast'));
const UpdateMpinterfaceDemandForecast = lazy(() => import('./components/header/MpinterfaceDemandForecast/UpdateMpinterfaceDemandForecast'));

const MPHaviSetupTableTable  = lazy(() => import('./components/config/MPHaviSetupTables/MPHaviSetupTablesTable'));
const AddMPHaviSetupTable = lazy(() => import('./components/config/MPHaviSetupTables/AddMPHaviSetupTables'));
const UpdateMPHaviSetupTable = lazy(() => import('./components/config/MPHaviSetupTables/UpdateMPHaviSetupTables'))

const Mp_qasensoryappstagingtableTable  = lazy(() => import('./components/header/Mp_qasensoryappstagingtables/Mp_qasensoryappstagingtablesTable'));
const AddMp_qasensoryappstagingtable = lazy(() => import('./components/header/Mp_qasensoryappstagingtables/AddMp_qasensoryappstagingtables'));
const UpdateMp_qasensoryappstagingtable = lazy(() => import('./components/header/Mp_qasensoryappstagingtables/UpdateMp_qasensoryappstagingtables'))

const MPSQLTrItemTable  = lazy(() => import('./components/header/MPSQLTrItems/MPSQLTrItemsTable'));
const AddMPSQLTrItem = lazy(() => import('./components/header/MPSQLTrItems/AddMPSQLTrItems'));
const UpdateMPSQLTrItem = lazy(() => import('./components/header/MPSQLTrItems/UpdateMPSQLTrItems'))


const MPSQLTrCustGroupTable  = lazy(() => import('./components/header/MPSQLTrCustGroups/MPSQLTrCustGroupsTable'));
const AddMPSQLTrCustGroup = lazy(() => import('./components/header/MPSQLTrCustGroups/AddMPSQLTrCustGroups'));
const UpdateMPSQLTrCustGroup = lazy(() => import('./components/header/MPSQLTrCustGroups/UpdateMPSQLTrCustGroups'))

const MPTmpHaviExportTableTable  = lazy(() => import('./components/header/MPTmpHaviExportTables/MPTmpHaviExportTablesTable'));
const AddMPTmpHaviExportTable = lazy(() => import('./components/header/MPTmpHaviExportTables/AddMPTmpHaviExportTables'));
const UpdateMPTmpHaviExportTable = lazy(() => import('./components/header/MPTmpHaviExportTables/UpdateMPTmpHaviExportTables'))

const MPTmpHavi852ExportTableTable  = lazy(() => import('./components/header/MPTmpHavi852ExportTables/MPTmpHavi852ExportTablesTable'));
const AddMPTmpHavi852ExportTable = lazy(() => import('./components/header/MPTmpHavi852ExportTables/AddMPTmpHavi852ExportTables'));
const UpdateMPTmpHavi852ExportTable = lazy(() => import('./components/header/MPTmpHavi852ExportTables/UpdateMPTmpHavi852ExportTables'))

const MPConcurExpensesReimbursedTable  = lazy(() => import('./components/header/MPConcurExpensesReimburseds/MPConcurExpensesReimbursedsTable'));
const AddMPConcurExpensesReimbursed = lazy(() => import('./components/header/MPConcurExpensesReimburseds/AddMPConcurExpensesReimburseds'));
const UpdateMPConcurExpensesReimbursed = lazy(() => import('./components/header/MPConcurExpensesReimburseds/UpdateMPConcurExpensesReimburseds'))


//HEADER DETAILS TABLE

const MpsalesOrderCareHeadersTable = lazy(() => import('./components/headerdetails/MpsalesOrderCareHeaders/MpsalesOrderCareHeadersTable'));
const AddMpsalesOrderCareHeaders = lazy(() => import('./components/headerdetails/MpsalesOrderCareHeaders/AddMpsalesOrderCareHeaders'));
const UpdateMpsalesOrderCareHeaders = lazy(() => import('./components/headerdetails/MpsalesOrderCareHeaders/UpdateMpsalesOrderCareHeaders'));
const ViewMpsalesOrderCareHeaders = lazy(() => import('./components/headerdetails/MpsalesOrderCareHeaders/ViewMpsalesOrderCareHeaders'));

const AddMpsalesOrderCareLines = lazy(() => import('./components/headerdetails/MpsalesOrderCareLines/AddMpsalesOrderCareLines'));

const MptransferOrderOutboundHeadersTable = lazy(() => import('./components/headerdetails/MptransferOrderOutboundHeaders/MptransferOrderOutboundHeadersTable'));
const AddMptransferOrderOutboundHeaders = lazy(() => import('./components/headerdetails/MptransferOrderOutboundHeaders/AddMptransferOrderOutboundHeaders'));
const UpdateMptransferOrderOutboundHeaders = lazy(() => import('./components/headerdetails/MptransferOrderOutboundHeaders/UpdateMptransferOrderOutboundHeaders'));
const ViewMptransferOrderOutboundHeaders = lazy(() => import('./components/headerdetails/MptransferOrderOutboundHeaders/ViewMptransferOrderOutboundHeaders'));

const AddMptransferOrderOutboundLines = lazy(() => import('./components/headerdetails/MptransferOrderOutboundLines/AddMptransferOrderOutboundLines'));


const Mpi21servicepoinheadersTable = lazy(() => import('./components/headerdetails/Mpi21servicepoinheaders/Mpi21servicepoinheadersTable'));
const AddMpi21servicepoinheaders = lazy(() => import('./components/headerdetails/Mpi21servicepoinheaders/AddMpi21servicepoinheaders'));
const UpdateMpi21servicepoinheaders = lazy(() => import('./components/headerdetails/Mpi21servicepoinheaders/UpdateMpi21servicepoinheaders'));
const ViewMpi21servicepoinheaders = lazy(() => import('./components/headerdetails/Mpi21servicepoinheaders/ViewMpi21servicepoinheaders'));

const AddMpi21servicepoinlines = lazy(() => import('./components/headerdetails/Mpi21servicepoinlines/AddMpi21servicepoinlines'));




const MPI21BLENDDEMANDSTAGINGTable = lazy(() => import('./components/headerdetails/MPI21BLENDDEMANDSTAGING/MPI21BLENDDEMANDSTAGINGTable'));
const AddMPI21BLENDDEMANDSTAGING = lazy(() => import('./components/headerdetails/MPI21BLENDDEMANDSTAGING/AddMPI21BLENDDEMANDSTAGING'));
const UpdateMPI21BLENDDEMANDSTAGING = lazy(() => import('./components/headerdetails/MPI21BLENDDEMANDSTAGING/UpdateMPI21BLENDDEMANDSTAGING'));
const ViewMPI21BLENDDEMANDSTAGING = lazy(() => import('./components/headerdetails/MPI21BLENDDEMANDSTAGING/ViewMPI21BLENDDEMANDSTAGING'));

const AddMPI21BLENDDEMANDLINE = lazy(() => import('./components/headerdetails/MPI21BLENDDEMANDLINE/AddMPI21BLENDDEMANDLINE'));




const Mpi21vendormasterheadersTable = lazy(() => import('./components/headerdetails/Mpi21vendormasterheaders/Mpi21vendormasterheadersTable'));
const AddMpi21vendormasterheaders = lazy(() => import('./components/headerdetails/Mpi21vendormasterheaders/AddMpi21vendormasterheaders'));
const UpdateMpi21vendormasterheaders = lazy(() => import('./components/headerdetails/Mpi21vendormasterheaders/UpdateMpi21vendormasterheaders'));
const ViewMpi21vendormasterheaders = lazy(() => import('./components/headerdetails/Mpi21vendormasterheaders/ViewMpi21vendormasterheaders'));

const AddMpi21vendormasterlines = lazy(() => import('./components/headerdetails/Mpi21vendormasterlines/AddMpi21vendormasterlines'));




const MPI21RAWMATDEMANDSTAGINGTable = lazy(() => import('./components/headerdetails/MPI21RAWMATDEMANDSTAGING/MPI21RAWMATDEMANDSTAGINGTable'));
const AddMPI21RAWMATDEMANDSTAGING = lazy(() => import('./components/headerdetails/MPI21RAWMATDEMANDSTAGING/AddMPI21RAWMATDEMANDSTAGING'));
const UpdateMPI21RAWMATDEMANDSTAGING = lazy(() => import('./components/headerdetails/MPI21RAWMATDEMANDSTAGING/UpdateMPI21RAWMATDEMANDSTAGING'));
const ViewMPI21RAWMATDEMANDSTAGING = lazy(() => import('./components/headerdetails/MPI21RAWMATDEMANDSTAGING/ViewMPI21RAWMATDEMANDSTAGING'));

const AddMPI21RAWMATDEMANDLINE = lazy(() => import('./components/headerdetails/MPI21RAWMATDEMANDLINE/AddMPI21RAWMATDEMANDLINE'));



const MPI21PURCHORDERNUMHEADERTable = lazy(() => import('./components/headerdetails/MPI21PURCHORDERNUMHEADER/MPI21PURCHORDERNUMHEADERTable'));
const AddMPI21PURCHORDERNUMHEADER = lazy(() => import('./components/headerdetails/MPI21PURCHORDERNUMHEADER/AddMPI21PURCHORDERNUMHEADER'));
const UpdateMPI21PURCHORDERNUMHEADER = lazy(() => import('./components/headerdetails/MPI21PURCHORDERNUMHEADER/UpdateMPI21PURCHORDERNUMHEADER'));
const ViewMPI21PURCHORDERNUMHEADER = lazy(() => import('./components/headerdetails/MPI21PURCHORDERNUMHEADER/ViewMPI21PURCHORDERNUMHEADER'));

const AddMPI21PURCHORDERNUMLINE = lazy(() => import('./components/headerdetails/MPI21PURCHORDERNUMLINE/AddMPI21PURCHORDERNUMLINE'));





const MPI21PURCHASEORDERHEADERTable = lazy(() => import('./components/headerdetails/MPI21PURCHASEORDERHEADER/MPI21PURCHASEORDERHEADERTable'));
const AddMPI21PURCHASEORDERHEADER = lazy(() => import('./components/headerdetails/MPI21PURCHASEORDERHEADER/AddMPI21PURCHASEORDERHEADER'));
const UpdateMPI21PURCHASEORDERHEADER = lazy(() => import('./components/headerdetails/MPI21PURCHASEORDERHEADER/UpdateMPI21PURCHASEORDERHEADER'));
const ViewMPI21PURCHASEORDERHEADER = lazy(() => import('./components/headerdetails/MPI21PURCHASEORDERHEADER/ViewMPI21PURCHASEORDERHEADER'));

const AddMPI21PURCHASEORDERLINE = lazy(() => import('./components/headerdetails/MPI21PURCHASEORDERLINE/AddMPI21PURCHASEORDERLINE'));



const Mpi21transferreceiptheadersTable = lazy(() => import('./components/headerdetails/Mpi21transferreceiptheaders/Mpi21transferreceiptheadersTable'));
const AddMpi21transferreceiptheaders = lazy(() => import('./components/headerdetails/Mpi21transferreceiptheaders/AddMpi21transferreceiptheaders'));
const UpdateMpi21transferreceiptheaders = lazy(() => import('./components/headerdetails/Mpi21transferreceiptheaders/UpdateMpi21transferreceiptheaders'));
const ViewMpi21transferreceiptheaders = lazy(() => import('./components/headerdetails/Mpi21transferreceiptheaders/ViewMpi21transferreceiptheaders'));

const AddMpi21transferreceiptlines = lazy(() => import('./components/headerdetails/Mpi21transferreceiptlines/AddMpi21transferreceiptlines'));








// HEADER-PROBAT TABLE

const MpinterfaceProbatCommandsTable = lazy(() => import('./components/header/MpinterfaceProbatCommands/MpinterfaceProbatCommandsTable'));
const AddMpinterfaceProbatCommands = lazy(() => import('./components/header/MpinterfaceProbatCommands/AddMpinterfaceProbatCommands'));
const UpdateMpinterfaceProbatCommands = lazy(() => import('./components/header/MpinterfaceProbatCommands/UpdateMpinterfaceProbatCommands'));

const MpinterfaceRouteTablesTable = lazy(() => import('./components/header/MpinterfaceRouteTables/MpinterfaceRouteTablesTable'));
const AddMpinterfaceRouteTables = lazy(() => import('./components/header/MpinterfaceRouteTables/AddMpinterfaceRouteTables'));
const UpdateMpinterfaceRouteTables = lazy(() => import('./components/header/MpinterfaceRouteTables/UpdateMpinterfaceRouteTables'));

const MpinterfaceTransferJourTablesTable = lazy(() => import('./components/header/MpinterfaceTransferJourTables/MpinterfaceTransferJourTablesTable'));
const AddMpinterfaceTransferJourTables = lazy(() => import('./components/header/MpinterfaceTransferJourTables/AddMpinterfaceTransferJourTables'));
const UpdateMpinterfaceTransferJourTables = lazy(() => import('./components/header/MpinterfaceTransferJourTables/UpdateMpinterfaceTransferJourTables'));

const MpinterfaceItemReceiptsTable = lazy(() => import('./components/header/MpinterfaceItemReceipts/MpinterfaceItemReceiptsTable'));
const AddMpinterfaceItemReceipts = lazy(() => import('./components/header/MpinterfaceItemReceipts/AddMpinterfaceItemReceipts'));
const UpdateMpinterfaceItemReceipts = lazy(() => import('./components/header/MpinterfaceItemReceipts/UpdateMpinterfaceItemReceipts'));

const MpinterfaceRafadjustTablesTable = lazy(() => import('./components/header/MpinterfaceRafadjustTables/MpinterfaceRafadjustTablesTable'));
const AddMpinterfaceRafadjustTables = lazy(() => import('./components/header/MpinterfaceRafadjustTables/AddMpinterfaceRafadjustTables'));
const UpdateMpinterfaceRafadjustTables = lazy(() => import('./components/header/MpinterfaceRafadjustTables/UpdateMpinterfaceRafadjustTables'));


//settings tables
const MPTablesInterfaceMapping = lazy(() => import('./components/settings/MPTablesInterfaceMapping/MPTablesInterfaceMapping'));
const AddMPTablesInterfaceMapping = lazy(() => import('./components/settings/MPTablesInterfaceMapping/AddMPTablesInterfaceMapping'));
const UpdateMPTablesInterfaceMapping = lazy(() => import('./components/settings/MPTablesInterfaceMapping/UpdateMPTablesInterfaceMapping'));

const UserInterfaceMapping = lazy(() => import('./components/settings/UserInterfaceMapping/UserInterfaceMapping'));
const AddUserInterfaceMapping = lazy(() => import('./components/settings/UserInterfaceMapping/AddUserInterfaceMapping'));
const UpdateUserInterfaceMapping = lazy(() => import('./components/settings/UserInterfaceMapping/UpdateUserInterfaceMapping'));

const UserLogin = lazy(() => import('./components/settings/UserLogin/UserLogin'));
const AddUserLogin = lazy(() => import('./components/settings/UserLogin/AddUserLogin'));
const UpdateUserLogin = lazy(() => import('./components/settings/UserLogin/UpdateUserLogin'));


//new merge by ritambhara

const MpinforProdOrderStatusTable  = lazy(() => import('./components/config/MpinforProdOrderStatuss/MpinforProdOrderStatussTable'));
const AddMpinforProdOrderStatus= lazy(() => import('./components/config/MpinforProdOrderStatuss/AddMpinforProdOrderStatuss'));
const UpdateMpinforProdOrderStatus = lazy(() => import('./components/config/MpinforProdOrderStatuss/UpdateMpinforProdOrderStatuss'));
 
const MpinforBuyerGroupTable  = lazy(() => import('./components/config/MpinforBuyerGroups/MpinforBuyerGroupsTable'));
const AddMpinforBuyerGroup= lazy(() => import('./components/config/MpinforBuyerGroups/AddMpinforBuyerGroups'));
const UpdateMpinforBuyerGroup = lazy(() => import('./components/config/MpinforBuyerGroups/UpdateMpinforBuyerGroups'));
 
 
const MpinforInventoryStatusTable  = lazy(() => import('./components/config/MpinforInventoryStatuss/MpinforInventoryStatussTable'));
const AddMpinforInventoryStatus= lazy(() => import('./components/config/MpinforInventoryStatuss/AddMpinforInventoryStatuss'));
const UpdateMpinforInventoryStatus = lazy(() => import('./components/config/MpinforInventoryStatuss/UpdateMpinforInventoryStatuss'));
 
const MpinforItemGroupConfigTable  = lazy(() => import('./components/config/MpinforItemGroupConfigs/MpinforItemGroupConfigsTable'));
const AddMpinforItemGroupConfig= lazy(() => import('./components/config/MpinforItemGroupConfigs/AddMpinforItemGroupConfigs'));
const UpdateMpinforItemGroupConfig = lazy(() => import('./components/config/MpinforItemGroupConfigs/UpdateMpinforItemGroupConfigs'));
 
const MpinforPlanProdOnDemandConfigTable  = lazy(() => import('./components/config/MpinforPlanProdOnDemandConfigs/MpinforPlanProdOnDemandConfigsTable'));
const AddMpinforPlanProdOnDemandConfig= lazy(() => import('./components/config/MpinforPlanProdOnDemandConfigs/AddMpinforPlanProdOnDemandConfigs'));
const UpdateMpinforPlanProdOnDemandConfig = lazy(() => import('./components/config/MpinforPlanProdOnDemandConfigs/UpdateMpinforPlanProdOnDemandConfigs'));
 
const MpinforInventOhtransferConfigTable  = lazy(() => import('./components/config/MpinforInventOhtransferConfigs//MpinforInventOhtransferConfigsTable'));
const AddMpinforInventOhtransferConfig= lazy(() => import('./components/config/MpinforInventOhtransferConfigs/AddMpinforInventOhtransferConfigs'));
const UpdateMpinforInventOhtransferConfig = lazy(() => import('./components/config/MpinforInventOhtransferConfigs/UpdateMpinforInventOhtransferConfigs'));

const Mptables = lazy(() => import('./components/config/Mptables/MptablesTable'));
const AddMptables = lazy(() => import('./components/config/Mptables/AddMptables'));
const UpdateMptables = lazy(() => import('./components/config/Mptables/UpdateMptables'));

const I21LocationsReferences = lazy(() => import('./components/config/I21LocationsReferences/I21LocationsReferencesTable'));
const AddI21LocationsReference = lazy(() => import('./components/config/I21LocationsReferences/AddI21LocationsReferences'));
const UpdateI21LocationsReference = lazy(() => import('./components/config/I21LocationsReferences/UpdateI21LocationsReferences'));

const I21VendorReferences = lazy(() => import('./components/config/I21VendorReferences/I21VendorReferencesTable'));
const AddI21VendorReference = lazy(() => import('./components/config/I21VendorReferences/AddI21VendorReferences'));
const UpdateI21VendorReference = lazy(() => import('./components/config/I21VendorReferences/UpdateI21VendorReferences'));

const Tmsmodes = lazy(() => import('./components/config/Tmsmodes/TmsmodesTable'));
const AddTmsmode = lazy(() => import('./components/config/Tmsmodes/AddTmsmodes'));
const UpdateTmsmode = lazy(() => import('./components/config/Tmsmodes/UpdateTmsmodes'));


const Powerplantcustomtables = lazy(() => import('./components/config/Powerplantcustomtables/PowerplantcustomtablesTable'));
const AddPowerplantcustomtable = lazy(() => import('./components/config/Powerplantcustomtables/AddPowerplantcustomtables'));
const UpdatePowerplantcustomtable = lazy(() => import('./components/config/Powerplantcustomtables/UpdatePowerplantcustomtables'));


const InforApsitemCoverageConfigs = lazy(() => import('./components/config/InforApsitemCoverageConfigs/InforApsitemCoverageConfigsTable'));
const AddInforApsitemCoverageConfig = lazy(() => import('./components/config/InforApsitemCoverageConfigs/AddInforApsitemCoverageConfigs'));
const UpdateInforApsitemCoverageConfig = lazy(() => import('./components/config/InforApsitemCoverageConfigs/UpdateInforApsitemCoverageConfigs'));

const InforItemGroup = lazy(() => import('./components/config/InforItemGroups/InforItemGroupsTable'));
const AddInforItemGroup = lazy(() => import('./components/config/InforItemGroups/AddInforItemGroups'));
const UpdateInforItemGroup = lazy(() => import('./components/config/InforItemGroups/UpdateInforItemGroups'));

const MpinforProductLifecycleState = lazy(() => import('./components/config/MpinforProductLifecycleStates/MpinforProductLifecycleStatesTable'));
const AddMpinforProductLifecycleState = lazy(() => import('./components/config/MpinforProductLifecycleStates/AddMpinforProductLifecycleStates'));
const UpdateMpinforProductLifecycleState = lazy(() => import('./components/config/MpinforProductLifecycleStates/UpdateMpinforProductLifecycleStates'));


const MpinforProdOrderExportConfig = lazy(() => import('./components/config/MpinforProdOrderExportConfigs/MpinforProdOrderExportConfigsTable'));
const AddMpinforProdOrderExportConfig = lazy(() => import('./components/config/MpinforProdOrderExportConfigs/AddMpinforProdOrderExportConfigs'));
const UpdateMpinforProdOrderExportConfig = lazy(() => import('./components/config/MpinforProdOrderExportConfigs/UpdateMpinforProdOrderExportConfigs'));


const MPInforOrderTypeTable = lazy(() => import('./components/config/MPInforOrderTypeTables/MPInforOrderTypeTablesTable'));
const AddMPInforOrderTypeTable = lazy(() => import('./components/config/MPInforOrderTypeTables/AddMPInforOrderTypeTables'));
const UpdateMPInforOrderTypeTable = lazy(() => import('./components/config/MPInforOrderTypeTables/UpdateMPInforOrderTypeTables'));


const MpinforPayloadParameter = lazy(() => import('./components/config/MpinforPayloadParameters/MpinforPayloadParametersTable'));
const AddMpinforPayloadParameter = lazy(() => import('./components/config/MpinforPayloadParameters/AddMpinforPayloadParameters'));
const UpdateMpinforPayloadParameter = lazy(() => import('./components/config/MpinforPayloadParameters/UpdateMpinforPayloadParameters'));


//arpit


const MpprobaterrorlogTable = lazy(() => import('./components/errorlog/Mpprobaterrorlog/MpprobaterrorlogTable'));
const AddMpprobaterrorlog = lazy(() => import('./components/errorlog/Mpprobaterrorlog/AddMpprobaterrorlog'));
const UpdateMpprobaterrorlog = lazy(() => import('./components/errorlog/Mpprobaterrorlog/UpdateMpprobaterrorlog'));

const Mpi21errorlogTable = lazy(() => import('./components/errorlog/Mpi21errorlog/Mpi21errorlogTable'));
const AddMpi21errorlog = lazy(() => import('./components/errorlog/Mpi21errorlog/AddMpi21errorlog'));
const UpdateMpi21errorlog = lazy(() => import('./components/errorlog/Mpi21errorlog/UpdateMpi21errorlog'));

const MpblujayerrorlogTable = lazy(() => import('./components/errorlog/Mpblujayerrorlog/MpblujayerrorlogTable'));
const AddMpblujayerrorlog = lazy(() => import('./components/errorlog/Mpblujayerrorlog/AddMpblujayerrorlog'));
const UpdateMpblujayerrorlog = lazy(() => import('./components/errorlog/Mpblujayerrorlog/UpdateMpblujayerrorlog'));

const MppowerplanterrorlogTable = lazy(() => import('./components/errorlog/Mppowerplanterrorlog/MppowerplanterrorlogTable'));
const AddMppowerplanterrorlog = lazy(() => import('./components/errorlog/Mppowerplanterrorlog/AddMppowerplanterrorlog'));
const UpdateMppowerplanterrorlog = lazy(() => import('./components/errorlog/Mppowerplanterrorlog/UpdateMppowerplanterrorlog'));

const MpinforAPSerrorlogTable = lazy(() => import('./components/errorlog/MpinforAPSerrorlog/MpinforAPSerrorlogTable'));
const AddMpinforAPSerrorlog = lazy(() => import('./components/errorlog/MpinforAPSerrorlog/AddMpinforAPSerrorlog'));
const UpdateMpinforAPSerrorlog = lazy(() => import('./components/errorlog/MpinforAPSerrorlog/UpdateMpinforAPSerrorlog'));

const MplogilityerrorlogTable = lazy(() => import('./components/errorlog/Mplogilityerrorlog/MplogilityerrorlogTable'));
const AddMplogilityerrorlog = lazy(() => import('./components/errorlog/Mplogilityerrorlog/AddMplogilityerrorlog'));
const UpdateMplogilityerrorlog = lazy(() => import('./components/errorlog/Mplogilityerrorlog/UpdateMplogilityerrorlog'));

const MpaveerrorlogTable = lazy(() => import('./components/errorlog/Mpaveerrorlog/MpaveerrorlogTable'));
const AddMpaveerrorlog = lazy(() => import('./components/errorlog/Mpaveerrorlog/AddMpaveerrorlog'));
const UpdateMpaveerrorlog = lazy(() => import('./components/errorlog/Mpaveerrorlog/UpdateMpaveerrorlog'));

const MpsqtrackingerrorlogTable = lazy(() => import('./components/errorlog/Mpsqtrackingerrorlog/MpsqtrackingerrorlogTable'));
const AddMpsqtrackingerrorlog = lazy(() => import('./components/errorlog/Mpsqtrackingerrorlog/AddMpsqtrackingerrorlog'));
const UpdateMpsqtrackingerrorlog = lazy(() => import('./components/errorlog/Mpsqtrackingerrorlog/UpdateMpsqtrackingerrorlog'));

const MphavierrorlogTable = lazy(() => import('./components/errorlog/Mphavierrorlog/MphavierrorlogTable'));
const AddMphavierrorlog = lazy(() => import('./components/errorlog/Mphavierrorlog/AddMphavierrorlog'));
const UpdateMphavierrorlog = lazy(() => import('./components/errorlog/Mphavierrorlog/UpdateMphavierrorlog'));

const MpaveitemmasternotetypesTable = lazy(() => import('./components/config/Mpaveitemmasternotetypes/MpaveitemmasternotetypesTable'));
const AddMpaveitemmasternotetypes = lazy(() => import('./components/config/Mpaveitemmasternotetypes/AddMpaveitemmasternotetypes'));
const UpdateMpaveitemmasternotetypes = lazy(() => import('./components/config/Mpaveitemmasternotetypes/UpdateMpaveitemmasternotetypes'));

// Lazy imports for Mpaveitemmasterexportstatus
const MpaveitemmasterexportstatusTable = lazy(() => import('./components/config/Mpaveitemmasterexportstatus/MpaveitemmasterexportstatusTable'));
const AddMpaveitemmasterexportstatus = lazy(() => import('./components/config/Mpaveitemmasterexportstatus/AddMpaveitemmasterexportstatus'));
const UpdateMpaveitemmasterexportstatus = lazy(() => import('./components/config/Mpaveitemmasterexportstatus/UpdateMpaveitemmasterexportstatus'));

// Lazy imports for Mpaveresourceinputlocation
const MpaveresourceinputlocationTable = lazy(() => import('./components/config/Mpaveresourceinputlocation/MpaveresourceinputlocationTable'));
const AddMpaveresourceinputlocation = lazy(() => import('./components/config/Mpaveresourceinputlocation/AddMpaveresourceinputlocation'));
const UpdateMpaveresourceinputlocation = lazy(() => import('./components/config/Mpaveresourceinputlocation/UpdateMpaveresourceinputlocation'));

// Lazy imports for Mpaveroutetable
const MpaveroutetableTable = lazy(() => import('./components/config/Mpaveroutetable/MpaveroutetableTable'));
const AddMpaveroutetable = lazy(() => import('./components/config/Mpaveroutetable/AddMpaveroutetable'));
const UpdateMpaveroutetable = lazy(() => import('./components/config/Mpaveroutetable/UpdateMpaveroutetable'));


const Mpi21InventorymovementnotexportedheaderTable = lazy(() => import('./components/maint/Mpi21Inventorymovementnotexportedheader/Mpi21InventorymovementnotexportedheaderTable'));
const AddMpi21Inventorymovementnotexportedheader = lazy(() => import('./components/maint/Mpi21Inventorymovementnotexportedheader/AddMpi21Inventorymovementnotexportedheader'));
const UpdateMpi21Inventorymovementnotexportedheader = lazy(() => import('./components/maint/Mpi21Inventorymovementnotexportedheader/UpdateMpi21Inventorymovementnotexportedheader'));

const MpinterfaceacktableTable = lazy(() => import('./components/maint/Mpinterfaceacktable/MpinterfaceacktableTable'));
const AddMpinterfaceacktable = lazy(() => import('./components/maint/Mpinterfaceacktable/AddMpinterfaceacktable'));
const UpdateMpinterfaceacktable = lazy(() => import('./components/maint/Mpinterfaceacktable/UpdateMpinterfaceacktable'));

const MpinterfacerafadjbatchordersTable = lazy(() => import('./components/header/Mpinterfacerafadjbatchorders/MpinterfacerafadjbatchordersTable'));
const AddMpinterfacerafadjbatchorders = lazy(() => import('./components/header/Mpinterfacerafadjbatchorders/AddMpinterfacerafadjbatchorders'));
const UpdateMpinterfacerafadjbatchorders = lazy(() => import('./components/header/Mpinterfacerafadjbatchorders/UpdateMpinterfacerafadjbatchorders'));


//Latest Config imports

const AveWhLocationsTable = lazy(() => import('./components/config/AveWhLocationss/AveWhLocationssTable'));
const AddAveWhLocations = lazy(() => import('./components/config/AveWhLocationss/AddAveWhLocationss'));
const UpdateAveWhLocations = lazy(() => import('./components/config/AveWhLocationss/UpdateAveWhLocationss'));



const MpenumTable = lazy(() => import('./components/config/Mpenums/MpenumsTable'));
const AddMpenum = lazy(() => import('./components/config/Mpenums/AddMpenums'));
const UpdateMpenum = lazy(() => import('./components/config/Mpenums/UpdateMpenums'));


const MpprobatequipmentxreftableTable = lazy(() => import('./components/config/Mpprobatequipmentxreftables/MpprobatequipmentxreftablesTable'));
const AddMpprobatequipmentxreftable = lazy(() => import('./components/config/Mpprobatequipmentxreftables/AddMpprobatequipmentxreftables'));
const UpdateMpprobatequipmentxreftable = lazy(() => import('./components/config/Mpprobatequipmentxreftables/UpdateMpprobatequipmentxreftables'));

const MpaveParameterTable = lazy(() => import('./components/config/MpaveParameters/MpaveParametersTable'));
const AddMpaveParameter = lazy(() => import('./components/config/MpaveParameters/AddMpaveParameters'));
const UpdateMpaveParameter = lazy(() => import('./components/config/MpaveParameters/UpdateMpaveParameters'));

const MplogilityWarehouseReferenceTable = lazy(() => import('./components/config/MplogilityWarehouseReferences/MplogilityWarehouseReferencesTable'));
const AddMplogilityWarehouseReference = lazy(() => import('./components/config/MplogilityWarehouseReferences/AddMplogilityWarehouseReferences'));
const UpdateMplogilityWarehouseReference = lazy(() => import('./components/config/MplogilityWarehouseReferences/UpdateMplogilityWarehouseReferences'));

const MpaveinventtableTable = lazy(() => import('./components/config/Mpaveinventtables/MpaveinventtablesTable'));
const AddMpaveinventtable = lazy(() => import('./components/config/Mpaveinventtables/AddMpaveinventtables'));
const UpdateMpaveinventtable = lazy(() => import('./components/config/Mpaveinventtables/UpdateMpaveinventtables'));

const MpaveinventitemgroupTable = lazy(() => import('./components/config/Mpaveinventitemgroups/MpaveinventitemgroupsTable'));
const AddMpaveinventitemgroup = lazy(() => import('./components/config/Mpaveinventitemgroups/AddMpaveinventitemgroups'));
const UpdateMpaveinventitemgroup = lazy(() => import('./components/config/Mpaveinventitemgroups/UpdateMpaveinventitemgroups'));

const MPProbatAvevaGroundLocationsTable = lazy(() => import('./components/config/MPProbatAvevaGroundLocationss/MPProbatAvevaGroundLocationssTable'));
const AddMPProbatAvevaGroundLocations = lazy(() => import('./components/config/MPProbatAvevaGroundLocationss/AddMPProbatAvevaGroundLocationss'));
const UpdateMPProbatAvevaGroundLocations = lazy(() => import('./components/config/MPProbatAvevaGroundLocationss/UpdateMPProbatAvevaGroundLocationss'));

const MpinforUnitConversionTable = lazy(() => import('./components/config/MpinforUnitConversions/MpinforUnitConversionsTable'));
const AddMpinforUnitConversion = lazy(() => import('./components/config/MpinforUnitConversions/AddMpinforUnitConversions'));
const UpdateMpinforUnitConversion = lazy(() => import('./components/config/MpinforUnitConversions/UpdateMpinforUnitConversions'));

const MpinforTransitionTable = lazy(() => import('./components/config/MpinforTransitions/MpinforTransitionsTable'));
const AddMpinforTransition = lazy(() => import('./components/config/MpinforTransitions/AddMpinforTransitions'));
const UpdateMpinforTransition = lazy(() => import('./components/config/MpinforTransitions/UpdateMpinforTransitions'));

const MpinforProdPoolConfigTable = lazy(() => import('./components/config/MpinforProdPoolConfigs/MpinforProdPoolConfigsTable'));
const AddMpinforProdPoolConfig = lazy(() => import('./components/config/MpinforProdPoolConfigs/MpinforProdPoolConfigsTable'));
const UpdateMpinforProdPoolConfig = lazy(() => import('./components/config/MpinforProdPoolConfigs/UpdateMpinforProdPoolConfigs'));

const MpinforMasterPlanConfigTable = lazy(() => import('./components/config/MpinforMasterPlanConfigs/MpinforMasterPlanConfigsTable'));
const AddMpinforMasterPlanConfig = lazy(() => import('./components/config/MpinforMasterPlanConfigs/AddMpinforMasterPlanConfigs'));
const UpdateMpinforMasterPlanConfig = lazy(() => import('./components/config/MpinforMasterPlanConfigs/UpdateMpinforMasterPlanConfigs'));


const MpinforItemGroupTableTable = lazy(() => import('./components/config/MpinforItemGroupTables/MpinforItemGroupTablesTable'));
const AddMpinforItemGroupTable = lazy(() => import('./components/config/MpinforItemGroupTables/AddMpinforItemGroupTables'));
const UpdateMpinforItemGroupTable = lazy(() => import('./components/config/MpinforItemGroupTables/UpdateMpinforItemGroupTables'));

const MpexchratesexpparamsTable = lazy(() => import('./components/config/Mpexchratesexpparamss/MpexchratesexpparamssTable'));
const AddMpexchratesexpparams = lazy(() => import('./components/config/Mpexchratesexpparamss/AddMpexchratesexpparamss'));
const UpdateMpexchratesexpparams = lazy(() => import('./components/config/Mpexchratesexpparamss/UpdateMpexchratesexpparamss'));

const MpbuygroupblendsTable = lazy(() => import('./components/config/Mpbuygroupblendss/MpbuygroupblendssTable'));
const AddMpbuygroupblends = lazy(() => import('./components/config/Mpbuygroupblendss/AddMpbuygroupblendss'));
const UpdateMpbuygroupblends = lazy(() => import('./components/config/Mpbuygroupblendss/UpdateMpbuygroupblendss'));

const MpcommitbuygroupTable = lazy(() => import('./components/config/Mpcommitbuygroups/MpcommitbuygroupsTable'));
const AddMpcommitbuygroup = lazy(() => import('./components/config/Mpcommitbuygroups/AddMpcommitbuygroups'));
const UpdateMpcommitbuygroup = lazy(() => import('./components/config/Mpcommitbuygroups/UpdateMpcommitbuygroups'));

const Mpi21_QuantityadjustmentsreasoncodesTable = lazy(() => import('./components/config/Mpi21_Quantityadjustmentsreasoncodess/Mpi21_QuantityadjustmentsreasoncodessTable'));
const AddMpi21_Quantityadjustmentsreasoncodes = lazy(() => import('./components/config/Mpi21_Quantityadjustmentsreasoncodess/AddMpi21_Quantityadjustmentsreasoncodess'));
const UpdateMpi21_Quantityadjustmentsreasoncodes = lazy(() => import('./components/config/Mpi21_Quantityadjustmentsreasoncodess/UpdateMpi21_Quantityadjustmentsreasoncodess'));

const Mpi21_QuantityadjustmentssetupTable = lazy(() => import('./components/config/Mpi21_Quantityadjustmentssetups/Mpi21_QuantityadjustmentssetupsTable'));
const AddMpi21_Quantityadjustmentssetup = lazy(() => import('./components/config/Mpi21_Quantityadjustmentssetups/AddMpi21_Quantityadjustmentssetups'));
const UpdateMpi21_Quantityadjustmentssetup = lazy(() => import('./components/config/Mpi21_Quantityadjustmentssetups/UpdateMpi21_Quantityadjustmentssetups'));



const Mpi21_InterfacejournalnamesTable = lazy(() => import('./components/config/Mpi21_Interfacejournalnamess/Mpi21_InterfacejournalnamessTable'));
const AddMpi21_Interfacejournalnames = lazy(() => import('./components/config/Mpi21_Interfacejournalnamess/AddMpi21_Interfacejournalnamess'));
const UpdateMpi21_Interfacejournalnames = lazy(() => import('./components/config/Mpi21_Interfacejournalnamess/UpdateMpi21_Interfacejournalnamess'));


const MpcommodblenddiffsTable = lazy(() => import('./components/config/Mpcommodblenddiffss/MpcommodblenddiffssTable'));
const AddMpcommodblenddiffs = lazy(() => import('./components/config/Mpcommodblenddiffss/AddMpcommodblenddiffss'));
const UpdateMpcommodblenddiffs = lazy(() => import('./components/config/Mpcommodblenddiffss/UpdateMpcommodblenddiffss'));

const MpcommodordersTable = lazy(() => import('./components/config/Mpcommodorderss/MpcommodorderssTable'));
const AddMpcommodorders = lazy(() => import('./components/config/Mpcommodorderss/AddMpcommodorderss'));
const UpdateMpcommodorders = lazy(() => import('./components/config/Mpcommodorderss/UpdateMpcommodorderss'));

//Latest Config imports ends

const Mpi21itemstandardprices = lazy(() => import('./components/header/Mpi21itemstandardprice/Mpi21itemstandardpriceTable'));
const AddMpi21itemstandardprices = lazy(() => import('./components/header/Mpi21itemstandardprice/AddMpi21itemstandardprice'));
const UpdateMpi21itemstandardprices = lazy(() => import('./components/header/Mpi21itemstandardprice/UpdateMpi21itemstandardprice'));

const Mpi21Itemchanges = lazy(() => import('./components/header/Mpi21Itemchanges/Mpi21ItemchangesTable'));
const AddMpi21Itemchanges = lazy(() => import('./components/header/Mpi21Itemchanges/AddMpi21Itemchanges'));
const UpdateMpi21Itemchanges = lazy(() => import('./components/header/Mpi21Itemchanges/UpdateMpi21Itemchanges'));

const MpinterfaceAaforecastTable = lazy(() => import('./components/header/MpinterfaceAaforecasts/MpinterfaceAaforecastsTable'));
const AddMpinterfaceAaforecast = lazy(() => import('./components/header/MpinterfaceAaforecasts/AddMpinterfaceAaforecasts'));
const UpdateMpinterfaceAaforecast = lazy(() => import('./components/header/MpinterfaceAaforecasts/UpdateMpinterfaceAaforecasts'));

const ProbatStagingbaseTable = lazy(() => import('./components/stagingbase/ProbatStagingbaseTable'));

const MpsalesOrderOutboundDataContract = lazy(() => import('./components/header/MpsalesOrderOutboundDataContract/MpsalesOrderOutboundDataContractTable'));
const AddMpsalesOrderOutboundDataContract = lazy(() => import('./components/header/MpsalesOrderOutboundDataContract/AddMpsalesOrderOutboundDataContract'));
const UpdateMpsalesOrderOutboundDataContract = lazy(() => import('./components/header/MpsalesOrderOutboundDataContract/UpdateMpsalesOrderOutboundDataContract'));

const MpinforProdOrderTable = lazy(() => import('./components/header/MpinforProdOrderTable/MpinforProdOrderTable'));
const AddMpinforProdOrderTable = lazy(() => import('./components/header/MpinforProdOrderTable/AddMpinforProdOrderTable'));
const UpdateMpinforProdOrderTable = lazy(() => import('./components/header/MpinforProdOrderTable/UpdateMpinforProdOrderTable'));

const MpinforPlannedProdOrder = lazy(() => import('./components/header/MpinforPlannedProdOrder/MpinforPlannedProdOrderTable'));
const AddMpinforPlannedProdOrder = lazy(() => import('./components/header/MpinforPlannedProdOrder/AddMpinforPlannedProdOrder'));
const UpdateMpinforPlannedProdOrder = lazy(() => import('./components/header/MpinforPlannedProdOrder/UpdateMpinforPlannedProdOrder'));

const MPi21ChargeCodeSetupsTable = lazy(() => import('./components/config/MPi21ChargeCodeSetups/MPi21ChargeCodeSetupsTable'));
const AddMPi21ChargeCodeSetups = lazy(() => import('./components/config/MPi21ChargeCodeSetups/AddMPi21ChargeCodeSetups'));
const UpdateMPi21ChargeCodeSetups = lazy(() => import('./components/config/MPi21ChargeCodeSetups/UpdateMPi21ChargeCodeSetups'));

const Mpi21vendormappingtableTable = lazy(() => import('./components/config/Mpi21vendormappingtables/Mpi21vendormappingtablesTable'));
const AddMpi21vendormappingtable = lazy(() => import('./components/config/Mpi21vendormappingtables/AddMpi21vendormappingtables'));
const UpdateMpi21vendormappingtable = lazy(() => import('./components/config/Mpi21vendormappingtables/UpdateMpi21vendormappingtables'));

const MPi21PurchasePoolConfigTable = lazy(() => import('./components/config/MPi21PurchasePoolConfigs/MPi21PurchasePoolConfigsTable'));
const AddMPi21PurchasePoolConfig = lazy(() => import('./components/config/MPi21PurchasePoolConfigs/AddMPi21PurchasePoolConfigs'));
const UpdateMPi21PurchasePoolConfig = lazy(() => import('./components/config/MPi21PurchasePoolConfigs/UpdateMPi21PurchasePoolConfigs'));


const MPi21FinancialDimensionsTable = lazy(() => import('./components/config/MPi21FinancialDimensionss/MPi21FinancialDimensionssTable'));
const AddMPi21FinancialDimensions = lazy(() => import('./components/config/MPi21FinancialDimensionss/AddMPi21FinancialDimensionss'));
const UpdateMPi21FinancialDimensions = lazy(() => import('./components/config/MPi21FinancialDimensionss/UpdateMPi21FinancialDimensionss'));

const Mpi21exchangeratesTable = lazy(() => import('./components/header/Mpi21exchangerates/Mpi21exchangeratesTable'));
const AddMpi21exchangerates = lazy(() => import('./components/header/Mpi21exchangerates/AddMpi21exchangerates'));
const UpdateMpi21exchangerates = lazy(() => import('./components/header/Mpi21exchangerates/UpdateMpi21exchangerates'));


const Mpi21_lotpropertyadjustmenttablesTable = lazy(() => import('./components/header/Mpi21_lotpropertyadjustmenttables/Mpi21_lotpropertyadjustmenttablesTable'));
const AddMpi21_lotpropertyadjustmenttables = lazy(() => import('./components/header/Mpi21_lotpropertyadjustmenttables/AddMpi21_lotpropertyadjustmenttables'));
const UpdateMpi21_lotpropertyadjustmenttables = lazy(() => import('./components/header/Mpi21_lotpropertyadjustmenttables/UpdateMpi21_lotpropertyadjustmenttables'));


const MpinforWrkCtrCapabilityResource = lazy(() => import('./components/header/MpinforWrkCtrCapabilityResource/MpinforWrkCtrCapabilityResource'));
const AddMpinforWrkCtrCapabilityResource = lazy(() => import('./components/header/MpinforWrkCtrCapabilityResource/AddMpinforWrkCtrCapabilityResource'));
const UpdateMpinforWrkCtrCapabilityResource = lazy(() => import('./components/header/MpinforWrkCtrCapabilityResource/UpdateMpinforWrkCtrCapabilityResource'));

const MpinforWrkCtrResourceGroupResource = lazy(() => import('./components/header/MpinforWrkCtrResourceGroupResource/MpinforWrkCtrResourceGroupResourceTable'));
const AddMpinforWrkCtrResourceGroupResource = lazy(() => import('./components/header/MpinforWrkCtrResourceGroupResource/AddMpinforWrkCtrResourceGroupResource'));
const UpdateMpinforWrkCtrResourceGroupResource = lazy(() => import('./components/header/MpinforWrkCtrResourceGroupResource/UpdateMpinforWrkCtrResourceGroupResource'));

const MpinforInventOnHand = lazy(() => import('./components/header/MpinforInventOnHand/MpinforInventOnHandTable'));
const AddMpinforInventOnHand = lazy(() => import('./components/header/MpinforInventOnHand/AddMpinforInventOnHand'));
const UpdateMpinforInventOnHand = lazy(() => import('./components/header/MpinforInventOnHand/UpdateMpinforInventOnHand'));

const MpinforReqTransPo = lazy(() => import('./components/header/MpinforReqTransPo/MpinforReqTransPoTable'));
const AddMpinforReqTransPo = lazy(() => import('./components/header/MpinforReqTransPo/AddMpinforReqTransPo'));
const UpdateMpinforReqTransPo = lazy(() => import('./components/header/MpinforReqTransPo/UpdateMpinforReqTransPo'));

const MpinforInventTransferTable = lazy(() => import('./components/header/MpinforInventTransferTable/MpinforInventTransferTable'));
const AddMpinforInventTransferTable = lazy(() => import('./components/header/MpinforInventTransferTable/AddMpinforInventTransferTable'));
const UpdateMpinforInventTransferTable = lazy(() => import('./components/header/MpinforInventTransferTable/UpdateMpinforInventTransferTable'));

const MpinforItemMasterTable = lazy(() => import('./components/header/MpinforItemMasters/MpinforItemMastersTable'));
const AddMpinforItemMaster = lazy(() => import('./components/header/MpinforItemMasters/AddMpinforItemMasters'));
const UpdateMpinforItemMaster = lazy(() => import('./components/header/MpinforItemMasters/UpdateMpinforItemMasters'));


const MpinforRouteVersionTable = lazy(() => import('./components/header/MpinforRouteVersions/MpinforRouteVersionsTable'));
const AddMpinforRouteVersion = lazy(() => import('./components/header/MpinforRouteVersions/AddMpinforRouteVersions'));
const UpdateMpinforRouteVersion = lazy(() => import('./components/header/MpinforRouteVersions/UpdateMpinforRouteVersions'));


const MpinforWrkCtrResourceGroupTable = lazy(() => import('./components/header/MpinforWrkCtrResourceGroups/MpinforWrkCtrResourceGroupsTable'));
const AddMpinforWrkCtrResourceGroup = lazy(() => import('./components/header/MpinforWrkCtrResourceGroups/AddMpinforWrkCtrResourceGroups'));
const UpdateMpinforWrkCtrResourceGroup = lazy(() => import('./components/header/MpinforWrkCtrResourceGroups/UpdateMpinforWrkCtrResourceGroups'));



const MpinforWrkCtrTableTable = lazy(() => import('./components/header/MpinforWrkCtrTables/MpinforWrkCtrTablesTable'));
const AddMpinforWrkCtrTable = lazy(() => import('./components/header/MpinforWrkCtrTables/AddMpinforWrkCtrTables'));
const UpdateMpinforWrkCtrTable = lazy(() => import('./components/header/MpinforWrkCtrTables/UpdateMpinforWrkCtrTables'));

const MpinforProdBatchOrderHeaderEntityTable = lazy(() => import('./components/header/MpinforProdBatchOrderHeaderEntitys/MpinforProdBatchOrderHeaderEntitysTable'));
const AddMpinforProdBatchOrderHeaderEntity = lazy(() => import('./components/header/MpinforProdBatchOrderHeaderEntitys/AddMpinforProdBatchOrderHeaderEntitys'));
const UpdateMpinforProdBatchOrderHeaderEntity = lazy(() => import('./components/header/MpinforProdBatchOrderHeaderEntitys/UpdateMpinforProdBatchOrderHeaderEntitys'));


const MpinforProdOrderCancelTable = lazy(() => import('./components/header/MpinforProdOrderCancels/MpinforProdOrderCancelsTable'));
const AddMpinforProdOrderCancel = lazy(() => import('./components/header/MpinforProdOrderCancels/AddMpinforProdOrderCancels'));
const UpdateMpinforProdOrderCancel = lazy(() => import('./components/header/MpinforProdOrderCancels/UpdateMpinforProdOrderCancels'));


const MpinforPurchTableTable = lazy(() => import('./components/header/MpinforPurchTables/MpinforPurchTablesTable'));
const AddMpinforPurchTable = lazy(() => import('./components/header/MpinforPurchTables/AddMpinforPurchTables'));
const UpdateMpinforPurchTable = lazy(() => import('./components/header/MpinforPurchTables/UpdateMpinforPurchTables'));

const MPI21SERVICEPOOUTHEADERTable = lazy(() => import('./components/headerdetails/Mpi21servicepooutheaders/Mpi21servicepooutheadersTable'));
const AddMPI21SERVICEPOOUTHEADER = lazy(() => import('./components/headerdetails/Mpi21servicepooutheaders/AddMpi21servicepooutheaders'));
const UpdateMPI21SERVICEPOOUTHEADER = lazy(() => import('./components/headerdetails/Mpi21servicepooutheaders/UpdateMpi21servicepooutheaders'));
const ViewMPI21SERVICEPOOUTHEADER = lazy(() => import('./components/headerdetails/Mpi21servicepooutheaders/ViewMpi21servicepooutheaders'));

const AddMPi21ServicePOOutLine = lazy(() => import('./components/headerdetails/MPi21ServicePOOutLine/AddMPi21ServicePOOutLine'));


const MPI21COMMITMENTPRICINGBGNHEADERTable = lazy(() => import('./components/headerdetails/MPI21COMMITMENTPRICINGBGNHEADER/MPI21COMMITMENTPRICINGBGNHEADERTable'));
const AddMPI21COMMITMENTPRICINGBGNHEADER = lazy(() => import('./components/headerdetails/MPI21COMMITMENTPRICINGBGNHEADER/AddMPI21COMMITMENTPRICINGBGNHEADER'));
const UpdateMPI21COMMITMENTPRICINGBGNHEADER = lazy(() => import('./components/headerdetails/MPI21COMMITMENTPRICINGBGNHEADER/UpdateMPI21COMMITMENTPRICINGBGNHEADER'));
const ViewMPI21COMMITMENTPRICINGBGNHEADER = lazy(() => import('./components/headerdetails/MPI21COMMITMENTPRICINGBGNHEADER/ViewMPI21COMMITMENTPRICINGBGNHEADER'));

const AddMPI21COMMITMENTPRICINGBGNLINE = lazy(() => import('./components/headerdetails/MPI21COMMITMENTPRICINGBGNLINE/AddMPI21COMMITMENTPRICINGBGNLINE'));


const MpinforBomheadersTable = lazy(() => import('./components/headerdetails/MpinforBomheaders/MpinforBomheadersTable'));
const AddMpinforBomheaders = lazy(() => import('./components/headerdetails/MpinforBomheaders/AddMpinforBomheaders'));
const UpdateMpinforBomheaders = lazy(() => import('./components/headerdetails/MpinforBomheaders/UpdateMpinforBomheaders'));
const ViewMpinforBomheaders = lazy(() => import('./components/headerdetails/MpinforBomheaders/ViewMpinforBomheaders'));

const AddMPInforBOMLines = lazy(() => import('./components/headerdetails/MPInforBOMLines/AddMPInforBOMLines'));



const Mpi21purchasegoodstableTable = lazy(() => import('./components/headerdetails/Mpi21purchasegoodstable/Mpi21purchasegoodstableTable'));
const AddMpi21purchasegoodstable = lazy(() => import('./components/headerdetails/Mpi21purchasegoodstable/AddMpi21purchasegoodstable'));
const UpdateMpi21purchasegoodstable = lazy(() => import('./components/headerdetails/Mpi21purchasegoodstable/UpdateMpi21purchasegoodstable'));
const ViewMpi21purchasegoodstable = lazy(() => import('./components/headerdetails/Mpi21purchasegoodstable/ViewMpi21purchasegoodstable'));

const AddMpi21purchasegoodsline = lazy(() => import('./components/headerdetails/Mpi21purchasegoodsline/AddMpi21purchasegoodsline'));

const Mpi21inventorymovementexported = lazy(() => import('./components/header/Mpi21inventorymovementexporteds/Mpi21inventorymovementexportedsTable'));
const AddMpi21inventorymovementexported = lazy(() => import('./components/header/Mpi21inventorymovementexporteds/AddMpi21inventorymovementexporteds'));
const UpdateMpi21inventorymovementexported = lazy(() => import('./components/header/Mpi21inventorymovementexporteds/UpdateMpi21inventorymovementexporteds'));

const MpinterfaceFfhhforecast = lazy(() => import('./components/header/MpinterfaceFfhhforecasts/MpinterfaceFfhhforecastsTable'));
const AddMpinterfaceFfhhforecast = lazy(() => import('./components/header/MpinterfaceFfhhforecasts/AddMpinterfaceFfhhforecasts'));
const UpdateMpinterfaceFfhhforecast = lazy(() => import('./components/header/MpinterfaceFfhhforecasts/UpdateMpinterfaceFfhhforecasts'));


const MpinterfaceBomheaderTablesTable = lazy(() => import('./components/headerdetails/MpinterfaceBomheaderTables/MpinterfaceBomheaderTablesTable'));
const AddMpinterfaceBomheaderTables = lazy(() => import('./components/headerdetails/MpinterfaceBomheaderTables/AddMpinterfaceBomheaderTables'));
const UpdateMpinterfaceBomheaderTables = lazy(() => import('./components/headerdetails/MpinterfaceBomheaderTables/UpdateMpinterfaceBomheaderTables'));
const ViewMpinterfaceBomheaderTables = lazy(() => import('./components/headerdetails/MpinterfaceBomheaderTables/ViewMpinterfaceBomheaderTables'));

const AddMPInterfaceBOMLineTable = lazy(() => import('./components/headerdetails/MPInterfaceBOMLineTable/AddMPInterfaceBOMLineTable'));

const Mpi21CommodityOrderAckHeaderTable  = lazy(() => import('./components/header/Mpi21CommodityOrderAckHeaderTable/Mpi21CommodityOrderAckHeaderTable'));
const AddMpi21CommodityOrderAckHeaderTable = lazy(() => import('./components/header/Mpi21CommodityOrderAckHeaderTable/AddMpi21CommodityOrderAckHeaderTable'));
const UpdateMpi21CommodityOrderAckHeaderTable = lazy(() => import('./components/header/Mpi21CommodityOrderAckHeaderTable/UpdateMpi21CommodityOrderAckHeaderTable'));

const Mpi21CommodityOrderHeader  = lazy(() => import('./components/header/Mpi21CommodityOrderHeader/Mpi21CommodityOrderHeader'));
const AddMpi21CommodityOrderHeader = lazy(() => import('./components/header/Mpi21CommodityOrderHeader/AddMpi21CommodityOrderHeader'));
const UpdateMpi21CommodityOrderHeader = lazy(() => import('./components/header/Mpi21CommodityOrderHeader/UpdateMpi21CommodityOrderHeader'));

const Mpi21CommodityOrderHeaderTable  = lazy(() => import('./components/header/Mpi21CommodityOrderHeaderTable/Mpi21CommodityOrderHeaderTable'));
const AddMpi21CommodityOrderHeaderTable = lazy(() => import('./components/header/Mpi21CommodityOrderHeaderTable/AddMpi21CommodityOrderHeaderTable'));
const UpdateMpi21CommodityOrderHeaderTable = lazy(() => import('./components/header/Mpi21CommodityOrderHeaderTable/UpdateMpi21CommodityOrderHeaderTable'));

const Mpi21cpbalqtyheaderTable  = lazy(() => import('./components/headerdetails/Mpi21cpbalqtyheader/Mpi21cpbalqtyheaderTable'));
const AddMpi21cpbalqtyheader = lazy(() => import('./components/headerdetails/Mpi21cpbalqtyheader/AddMpi21cpbalqtyheader'));
const UpdateMpi21cpbalqtyheader = lazy(() => import('./components/headerdetails/Mpi21cpbalqtyheader/UpdateMpi21cpbalqtyheader'));
const ViewMpi21cpbalqtyheader = lazy(() => import('./components/headerdetails/Mpi21cpbalqtyheader/ViewMpi21cpbalqtyheader'));

const AddMpi21cpbalqtyline = lazy(() => import('./components/headerdetails/Mpi21cpbalqtyline/AddMpi21cpbalqtyline'));

const Mpi21VendPaymConfirmationHeaderTable  = lazy(() => import('./components/header/Mpi21VendPaymConfirmationHeader/Mpi21VendPaymConfirmationHeader'));
const AddMpi21VendPaymConfirmationHeader = lazy(() => import('./components/header/Mpi21VendPaymConfirmationHeader/AddMpi21VendPaymConfirmationHeader'));
const UpdateMpi21VendPaymConfirmationHeader = lazy(() => import('./components/header/Mpi21VendPaymConfirmationHeader/UpdateMpi21VendPaymConfirmationHeader'));

const Mpi21VoucherHeaderTable  = lazy(() => import('./components/headerdetails/Mpi21VoucherHeader/Mpi21VoucherHeaderTable'));
const AddMpi21VoucherHeader = lazy(() => import('./components/headerdetails/Mpi21VoucherHeader/AddMpi21VoucherHeader'));
const UpdateMpi21VoucherHeader = lazy(() => import('./components/headerdetails/Mpi21VoucherHeader/UpdateMpi21VoucherHeader'));
const ViewMpi21VoucherHeader = lazy(() => import('./components/headerdetails/Mpi21VoucherHeader/ViewMpi21VoucherHeader'));

const AddMpi21VoucherLine = lazy(() => import('./components/headerdetails/Mpi21VoucherLine/AddMpi21VoucherLine'));

const MPi21CommitementPricingBGNHeaderExportTable  = lazy(() => import('./components/headerdetails/MPi21CommitementPricingBGNHeaderExport/MPi21CommitementPricingBGNHeaderExportTable'));
const AddMPi21CommitementPricingBGNHeaderExport = lazy(() => import('./components/headerdetails/MPi21CommitementPricingBGNHeaderExport/AddMPi21CommitementPricingBGNHeaderExport'));
const UpdateMPi21CommitementPricingBGNHeaderExport = lazy(() => import('./components/headerdetails/MPi21CommitementPricingBGNHeaderExport/UpdateMPi21CommitementPricingBGNHeaderExport'));
const ViewMPi21CommitementPricingBGNHeaderExport = lazy(() => import('./components/headerdetails/MPi21CommitementPricingBGNHeaderExport/ViewMPi21CommitementPricingBGNHeaderExport'));

const AddMPi21CommitementPricingBGNLineExport = lazy(() => import('./components/headerdetails/MPi21CommitementPricingBGNLineExport/AddMPi21CommitementPricingBGNLineExport'));



const AppRoutes = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <GenericProvider>
                <SecondaryProvider>
                    <GenericPaginationProvider>

                        <Routes>

                            {/* User Routes */}

                            <Route path="/" element={<Layout />}>

                            //unnati
                                <Route path="/MPi21_CommodityOrderAckHeaderTable" element={<Mpi21CommodityOrderAckHeaderTable />} />
                                <Route path="/add-Mpi21CommodityOrderAckHeaderTable" element={<AddMpi21CommodityOrderAckHeaderTable />} />
                                <Route path="/update-Mpi21CommodityOrderAckHeaderTable/:recid" element={<UpdateMpi21CommodityOrderAckHeaderTable />} />

                                <Route path="/MPi21_CommodityOrderHeaderTable" element={<Mpi21CommodityOrderHeaderTable />} />
                                <Route path="/add-Mpi21CommodityOrderHeaderTable" element={<AddMpi21CommodityOrderHeaderTable />} />
                                <Route path="/update-Mpi21CommodityOrderHeaderTable/:recid" element={<UpdateMpi21CommodityOrderHeaderTable />} />

                                <Route path="/Mpi21CommodityOrderHeader" element={<Mpi21CommodityOrderHeader />} />
                                <Route path="/add-Mpi21CommodityOrderHeader" element={<AddMpi21CommodityOrderHeader />} />
                                <Route path="/update-Mpi21CommodityOrderHeader/:recid" element={<UpdateMpi21CommodityOrderHeader />} />

                                <Route path="/Mpi21VendPaymConfirmationHeader" element={<Mpi21VendPaymConfirmationHeaderTable />} />
                                <Route path="/add-Mpi21VendPaymConfirmationHeader" element={<AddMpi21VendPaymConfirmationHeader />} />
                                <Route path="/update-Mpi21VendPaymConfirmationHeader/:recid" element={<UpdateMpi21VendPaymConfirmationHeader />} />

                                <Route path="/Mpi21cpbalqtyheader" element={<Mpi21cpbalqtyheaderTable />} />
                                <Route path="/add-Mpi21cpbalqtyheader" element={<AddMpi21cpbalqtyheader />} />
                                <Route path="/update-Mpi21cpbalqtyheader/:recid" element={<UpdateMpi21cpbalqtyheader />} />
                                <Route path="/view-Mpi21cpbalqtyheader/:recid" element={<ViewMpi21cpbalqtyheader />} />
                                                                
                                <Route path="/Mpi21cpbalqtyline" element={<ViewMpi21cpbalqtyheader />} />
                                <Route path="/add-Mpi21cpbalqtyline" element={<AddMpi21cpbalqtyline />} />

                                <Route path="/Mpi21VoucherHeader" element={<Mpi21VoucherHeaderTable />} />
                                <Route path="/add-Mpi21VoucherHeader" element={<AddMpi21VoucherHeader />} />
                                <Route path="/update-Mpi21VoucherHeader/:recid" element={<UpdateMpi21VoucherHeader />} />
                                <Route path="/view-Mpi21VoucherHeader/:recid" element={<ViewMpi21VoucherHeader />} />
                                                                
                                <Route path="/Mpi21VoucherLine" element={<ViewMpi21VoucherHeader />} />
                                <Route path="/add-Mpi21VoucherLine" element={<AddMpi21VoucherLine />} />

                                <Route path="/MPi21CommitementPricingBGNHeaderExport" element={<MPi21CommitementPricingBGNHeaderExportTable />} />
                                <Route path="/add-MPi21CommitementPricingBGNHeaderExport" element={<AddMPi21CommitementPricingBGNHeaderExport />} />
                                <Route path="/update-MPi21CommitementPricingBGNHeaderExport/:recid" element={<UpdateMPi21CommitementPricingBGNHeaderExport />} />
                                <Route path="/view-MPi21CommitementPricingBGNHeaderExport/:recid" element={<ViewMPi21CommitementPricingBGNHeaderExport />} />
                                                                
                                <Route path="/MPi21CommitementPricingBGNLineExport" element={<ViewMPi21CommitementPricingBGNHeaderExport />} />
                                <Route path="/add-MPi21CommitementPricingBGNLineExport" element={<AddMPi21CommitementPricingBGNLineExport />} />





                        //arpit


                                <Route path="/Mpi21Inventorymovementnotexportedheader" element={<Mpi21InventorymovementnotexportedheaderTable />} />
                                <Route path="/add-Mpi21Inventorymovementnotexportedheader" element={<AddMpi21Inventorymovementnotexportedheader />} />
                                <Route path="/update-Mpi21Inventorymovementnotexportedheader/:recid" element={<UpdateMpi21Inventorymovementnotexportedheader />} />


                                <Route path="/Mpinterfacerafadjbatchorders" element={<MpinterfacerafadjbatchordersTable />} />
                                <Route path="/add-Mpinterfacerafadjbatchorders" element={<AddMpinterfacerafadjbatchorders />} />
                                <Route path="/update-Mpinterfacerafadjbatchorders/:recid" element={<UpdateMpinterfacerafadjbatchorders />} />





                         // Routes for Mpaveitemmasterexportstatus
                                <Route path="/Mpaveitemmasterexportstatus" element={<MpaveitemmasterexportstatusTable />} />
                                <Route path="/add-mpaveitemmasterexportstatus" element={<AddMpaveitemmasterexportstatus />} />
                                <Route path="/update-mpaveitemmasterexportstatus/:recid" element={<UpdateMpaveitemmasterexportstatus />} />

                        // Routes for Mpaveresourceinputlocation
                                <Route path="/Mpaveresourceinputlocation" element={<MpaveresourceinputlocationTable />} />
                                <Route path="/add-mpaveresourceinputlocation" element={<AddMpaveresourceinputlocation />} />
                                <Route path="/update-mpaveresourceinputlocation/:recid" element={<UpdateMpaveresourceinputlocation />} />

                         // Routes for Mpaveroutetable
                                <Route path="/Mpaveroutetable" element={<MpaveroutetableTable />} />
                                <Route path="/add-mpaveroutetable" element={<AddMpaveroutetable />} />
                                <Route path="/update-mpaveroutetable/:recid" element={<UpdateMpaveroutetable />} />



                         // Routes for Mpinterfaceacktable
                                <Route path="/Mpinterfaceacktable" element={<MpinterfaceacktableTable />} />
                                <Route path="/add-mpinterfaceacktable" element={<AddMpinterfaceacktable />} />
                                <Route path="/update-mpinterfaceacktable/:recid" element={<UpdateMpinterfaceacktable />} />


                         // Routes for Mpaveitemmasternotetypes
                                <Route path="/Mpaveitemmasternotetypes" element={<MpaveitemmasternotetypesTable />} />
                                <Route path="/add-mpaveitemmasternotetypes" element={<AddMpaveitemmasternotetypes />} />
                                <Route path="/update-mpaveitemmasternotetypes/:recid" element={<UpdateMpaveitemmasternotetypes />} />

                               // Routes for MpprobaterrorlogTable

                                <Route path="/Mpprobaterrorlog" element={<MpprobaterrorlogTable />} />
                                <Route path="/add-mpprobaterrorlog" element={<AddMpprobaterrorlog />} />
                                <Route path="/update-mpprobaterrorlog/:recid" element={<UpdateMpprobaterrorlog />} />
                                <Route path="/MPProbatErrorLog/:id" element={<MpprobaterrorlogTable />} />

                                <Route path="/Mpi21errorlog" element={<Mpi21errorlogTable />} />
                                <Route path="/add-Mpi21errorlog" element={<AddMpi21errorlog />} />
                                <Route path="/update-Mpi21errorlog/:recid" element={<UpdateMpi21errorlog />} />
                                <Route path="/Mpi21errorlog/:id" element={<Mpi21errorlogTable />} />

                                <Route path="/Mpblujayerrorlog" element={<MpblujayerrorlogTable />} />
                                <Route path="/add-Mpblujayerrorlog" element={<AddMpblujayerrorlog />} />
                                <Route path="/update-Mpblujayerrorlog/:recid" element={<UpdateMpblujayerrorlog />} />
                                <Route path="/Mpblujayerrorlog/:id" element={<MpblujayerrorlogTable />} />

                                <Route path="/Mppowerplanterrorlog" element={<MppowerplanterrorlogTable />} />
                                <Route path="/add-Mppowerplanterrorlog" element={<AddMppowerplanterrorlog />} />
                                <Route path="/update-Mppowerplanterrorlog/:recid" element={<UpdateMppowerplanterrorlog />} />
                                <Route path="/Mppowerplanterrorlog/:id" element={<MppowerplanterrorlogTable />} />

                                <Route path="/Mpinforerrorlog" element={<MpinforAPSerrorlogTable />} />
                                <Route path="/add-MpinforAPSerrorlog" element={<AddMpinforAPSerrorlog />} />
                                <Route path="/update-MpinforAPSerrorlog/:recid" element={<UpdateMpinforAPSerrorlog />} />
                                <Route path="/Mpinforerrorlog/:id" element={<MpinforAPSerrorlogTable />} />

                                <Route path="/Mplogilityerrorlog" element={<MplogilityerrorlogTable />} />
                                <Route path="/add-Mplogilityerrorlog" element={<AddMplogilityerrorlog />} />
                                <Route path="/update-Mplogilityerrorlog/:recid" element={<UpdateMplogilityerrorlog />} />
                                <Route path="/Mplogilityerrorlog/:id" element={<MplogilityerrorlogTable />} />

                                <Route path="/Mpaveerrorlog" element={<MpaveerrorlogTable />} />
                                <Route path="/add-Mpaveerrorlog" element={<AddMpaveerrorlog />} />
                                <Route path="/update-Mpaveerrorlog/:recid" element={<UpdateMpaveerrorlog />} />
                                <Route path="/Mpaveerrorlog/:id" element={<MpaveerrorlogTable />} />

                                <Route path="/Mpsqtrackingerrorlog" element={<MpsqtrackingerrorlogTable />} />
                                <Route path="/add-Mpsqtrackingerrorlog" element={<AddMpsqtrackingerrorlog />} />
                                <Route path="/update-Mpsqtrackingerrorlog/:recid" element={<UpdateMpsqtrackingerrorlog />} />
                                <Route path="/Mpsqtrackingerrorlog/:id" element={<MpsqtrackingerrorlogTable />} />

                                <Route path="/Mphavierrorlog" element={<MphavierrorlogTable />} />
                                <Route path="/add-Mphavierrorlog" element={<AddMphavierrorlog />} />
                                <Route path="/update-Mphavierrorlog/:recid" element={<UpdateMphavierrorlog />} />
                                <Route path="/Mphavierrorlog/:id" element={<MphavierrorlogTable />} />

                            //new routes by ritambhara

                                <Route path="/MpinforProdOrderStatus" element={<MpinforProdOrderStatusTable />} />
                                <Route path="/add-MpinforProdOrderStatus" element={<AddMpinforProdOrderStatus/>} />
                                <Route path="/update-MpinforProdOrderStatus/:recid" element={<UpdateMpinforProdOrderStatus/>} />
 
                                <Route path="/MpinforBuyerGroup" element={<MpinforBuyerGroupTable />} />
                                <Route path="/add-MpinforBuyerGroup" element={<AddMpinforBuyerGroup/>} />
                                <Route path="/update-MpinforBuyerGroup/:recid" element={<UpdateMpinforBuyerGroup/>} />
 
                                <Route path="/MpinforInventoryStatus" element={<MpinforInventoryStatusTable />} />
                                <Route path="/add-MpinforInventoryStatus" element={<AddMpinforInventoryStatus/>} />
                                <Route path="/update-MpinforInventoryStatus/:recid" element={<UpdateMpinforInventoryStatus/>} />
 
                               
                                <Route path="/MpinforItemGroupConfig" element={<MpinforItemGroupConfigTable />} />
                                <Route path="/add-MpinforItemGroupConfig" element={<AddMpinforItemGroupConfig/>} />
                                <Route path="/update-MpinforItemGroupConfig/:recid" element={<UpdateMpinforItemGroupConfig/>} />
 
 
                                <Route path="/MpinforPlanProdOnDemandConfig" element={<MpinforPlanProdOnDemandConfigTable />} />
                                <Route path="/add-MpinforPlanProdOnDemandConfig" element={<AddMpinforPlanProdOnDemandConfig/>} />
                                <Route path="/update-MpinforPlanProdOnDemandConfig/:recid" element={<UpdateMpinforPlanProdOnDemandConfig/>} />
 
                               
                                <Route path="/MpinforInventOhtransferConfig" element={<MpinforInventOhtransferConfigTable />} />
                                <Route path="/add-MpinforInventOhtransferConfig" element={<AddMpinforInventOhtransferConfig/>} />
                                <Route path="/update-MpinforInventOhtransferConfig/:recid" element={<UpdateMpinforInventOhtransferConfig/>} />
                                
                                <Route path="/Tmsmode" element={<Tmsmodes />} />
                                <Route path="/add-Tmsmode" element={<AddTmsmode />} />
                                <Route path="/update-Tmsmode/:recid" element={<UpdateTmsmode />} />




                                <Route path="/MpinforPayloadParameters" element={<MpinforPayloadParameter />} />
                                <Route path="/add-MpinforPayloadParameter" element={<AddMpinforPayloadParameter />} />
                                <Route path="/update-MpinforPayloadParameter/:recid" element={<UpdateMpinforPayloadParameter />} />

                                <Route path="/MPInforOrderTypeTable" element={<MPInforOrderTypeTable />} />
                                <Route path="/add-MPInforOrderTypeTable" element={<AddMPInforOrderTypeTable />} />
                                <Route path="/update-MPInforOrderTypeTable/:recid" element={<UpdateMPInforOrderTypeTable />} />



                                <Route path="/MpinforProductLifecycleState" element={<MpinforProductLifecycleState />} />
                                <Route path="/add-MpinforProductLifecycleState" element={<AddMpinforProductLifecycleState />} />
                                <Route path="/update-MpinforProductLifecycleState/:recid" element={<UpdateMpinforProductLifecycleState />} />



                                <Route path="/MpinforProdOrderExportConfig" element={<MpinforProdOrderExportConfig />} />
                                <Route path="/add-MpinforProdOrderExportConfig" element={<AddMpinforProdOrderExportConfig />} />
                                <Route path="/update-MpinforProdOrderExportConfig/:recid" element={<UpdateMpinforProdOrderExportConfig />} />


                                <Route path="/Infor_ItemGroups" element={<InforItemGroup />} />
                                <Route path="/add-InforItemGroup" element={<AddInforItemGroup />} />
                                <Route path="/update-InforItemGroup/:recid" element={<UpdateInforItemGroup />} />


                                <Route path="/InforApsitemCoverageConfig" element={<InforApsitemCoverageConfigs />} />
                                <Route path="/add-InforApsitemCoverageConfig" element={<AddInforApsitemCoverageConfig />} />
                                <Route path="/update-InforApsitemCoverageConfig/:recid" element={<UpdateInforApsitemCoverageConfig />} />

                                <Route path="/Powerplantcustomtable" element={<Powerplantcustomtables />} />
                                <Route path="/add-Powerplantcustomtable" element={<AddPowerplantcustomtable />} />
                                <Route path="/update-Powerplantcustomtable/:recid" element={<UpdatePowerplantcustomtable />} />


                                <Route path="/I21VendorReference" element={<I21VendorReferences />} />
                                <Route path="/add-I21VendorReference" element={<AddI21VendorReference />} />
                                <Route path="/update-I21VendorReference/:recid" element={<UpdateI21VendorReference />} />

                                <Route path="/I21VendorReference" element={<I21VendorReferences />} />
                                <Route path="/add-I21VendorReference" element={<AddI21VendorReference />} />
                                <Route path="/update-I21VendorReference/:recid" element={<UpdateI21VendorReference />} />

                                <Route path="/I21LocationsReference" element={<I21LocationsReferences />} />
                                <Route path="/add-I21LocationsReferences" element={<AddI21LocationsReference />} />
                                <Route path="/update-I21LocationsReferences/:recid" element={<UpdateI21LocationsReference />} />


                                <Route path="/Mptables" element={<Mptables />} />
                                <Route path="/add-Mptables" element={<AddMptables />} />
                                <Route path="/update-Mptables/:id" element={<UpdateMptables />} />

                                <Route path="/add-mpheaderTables" element={<AddMpheaderTables />} />
                                <Route path="/update-mpheaderTables/:tableId" element={<UpdateMpheaderTables />} />

                                <Route path="/Mpaveprobatgroundcoffeestaging" element={<Mpaveprobatgroundcoffeestagings />} />
                                <Route path="/add-Mpaveprobatgroundcoffeestagings" element={<AddMpaveprobatgroundcoffeestagings />} />
                                <Route path="/update-Mpaveprobatgroundcoffeestagings/:recid" element={<UpdateMpaveprobatgroundcoffeestagings />} />

                                <Route path="/Mpaveordercompleteheader" element={<Mpaveordercompleteheaders />} />
                                <Route path="/add-Mpaveordercompleteheaders" element={<AddMpaveordercompleteheaders />} />
                                <Route path="/update-Mpaveordercompleteheaders/:recid" element={<UpdateMpaveordercompleteheaders />} />

                                <Route path="/Mpavelotmixing" element={<Mpavelotmixings />} />
                                <Route path="/add-Mpavelotmixings" element={<AddMpavelotmixings />} />
                                <Route path="/update-Mpavelotmixings/:recid" element={<UpdateMpavelotmixings />} />

                                <Route path="/Mpaveitemmasterheader" element={<Mpaveitemmasterheaders />} />
                                <Route path="/add-Mpaveitemmasterheaders" element={<AddMpaveitemmasterheaders />} />
                                <Route path="/update-Mpaveitemmasterheaders/:recid" element={<UpdateMpaveitemmasterheaders />} />


                                <Route path="/Mpaveinvtransferheader" element={<Mpaveinvtransferheaders />} />
                                <Route path="/add-Mpaveinvtransferheaders" element={<AddMpaveinvtransferheaders />} />
                                <Route path="/update-Mpaveinvtransferheaders/:recid" element={<UpdateMpaveinvtransferheaders />} />


                                <Route path="/Mpaveinventoryinterfaceheader" element={<Mpaveinventoryinterfaceheaders />} />
                                <Route path="/add-Mpaveinventoryinterfaceheaders" element={<AddMpaveinventoryinterfaceheaders />} />
                                <Route path="/update-Mpaveinventoryinterfaceheaders/:recid" element={<UpdateMpaveinventoryinterfaceheaders />} />

                                <Route path="/Mpavebommasterheader" element={<Mpavebommasterheaders />} />
                                <Route path="/add-Mpavebommasterheaders" element={<AddMpavebommasterheaders />} />
                                <Route path="/update-Mpavebommasterheaders/:recid" element={<UpdateMpavebommasterheaders />} />

                                <Route path="/Mpinterfaceparameters" element={<MpinterfaceparametersTable />} />
                                <Route path="/add-Mpinterfaceparameter" element={<AddMpinterfaceparameters />} />
                                <Route path="/update-Mpinterfaceparameter/:recid" element={<UpdateMpinterfaceparameters />} />

                                <Route path="/Mpi21vendorreference" element={<Mpi21vendorreferencesTable />} />
                                <Route path="/add-Mpi21vendorreference" element={<AddMpi21vendorreferences />} />
                                <Route path="/update-Mpi21vendorreference/:recid" element={<UpdateMpi21vendorreferences />} />

                                <Route path="/MPI21SERVICEPOOUTHEADER" element={<MPI21SERVICEPOOUTHEADERTable />} />
                                <Route path="/add-MPI21SERVICEPOOUTHEADER" element={<AddMPI21SERVICEPOOUTHEADER />} />
                                <Route path="/update-MPI21SERVICEPOOUTHEADER/:recid" element={<UpdateMPI21SERVICEPOOUTHEADER />} />
                                <Route path="/view-MPI21SERVICEPOOUTHEADER/:recid" element={<ViewMPI21SERVICEPOOUTHEADER />} />


                                <Route path="/MPi21ServicePOOutLine" element={<ViewMPI21SERVICEPOOUTHEADER />} />
                                <Route path="/add-MPi21ServicePOOutLine" element={<AddMPi21ServicePOOutLine />} />


                                <Route path="/MpinforBomheader" element={<MpinforBomheadersTable />} />
                                <Route path="/add-MpinforBomheader" element={<AddMpinforBomheaders />} />
                                <Route path="/update-MpinforBomheader/:recid" element={<UpdateMpinforBomheaders />} />
                                <Route path="/view-MpinforBomheader/:recid" element={<ViewMpinforBomheaders />} />


                                <Route path="/MPInforBOMLines" element={<ViewMpinforBomheaders />} />
                                <Route path="/add-MPInforBOMLines" element={<AddMPInforBOMLines />} />


                                <Route path="/MPI21_PURCHASEGOODSTABLE" element={<Mpi21purchasegoodstableTable />} />
                                <Route path="/add-MPI21_PURCHASEGOODSTABLE" element={<AddMpi21purchasegoodstable />} />
                                <Route path="/update-MPI21_PURCHASEGOODSTABLE/:recid" element={<UpdateMpi21purchasegoodstable />} />
                                <Route path="/view-MPI21_PURCHASEGOODSTABLE/:recid" element={<ViewMpi21purchasegoodstable />} />

                                <Route path="/MPI21_PURCHASEGOODSLINES" element={<ViewMpi21purchasegoodstable />} />
                                <Route path="/add-MPI21_PURCHASEGOODSLINES" element={<AddMpi21purchasegoodsline />} />

                                <Route path="/Mpi21vendorentitytable" element={<Mpi21vendorentitytablesTable />} />
                                <Route path="/add-Mpi21vendorentitytable" element={<AddMpi21vendorentitytables />} />
                                <Route path="/update-Mpi21vendorentitytable/:recid" element={<UpdateMpi21vendorentitytables />} />

                                <Route path="/Mpi21subwipproditemgroup" element={<Mpi21subwipproditemgroupsTable />} />
                                <Route path="/add-Mpi21subwipproditemgroup" element={<AddMpi21subwipproditemgroups />} />
                                <Route path="/update-Mpi21subwipproditemgroup/:recid" element={<UpdateMpi21subwipproditemgroups />} />

                                <Route path="/Mpi21subwipexcludeitems" element={<Mpi21subwipexcludeitemsTable />} />
                                <Route path="/add-Mpi21subwipexcludeitem" element={<AddMpi21subwipexcludeitems />} />
                                <Route path="/update-Mpi21subwipexcludeitem/:recid" element={<UpdateMpi21subwipexcludeitems />} />

                                <Route path="/Mpi21subwipconssitewhse" element={<Mpi21subwipconssitewhsesTable />} />
                                <Route path="/add-Mpi21subwipconssitewhse" element={<AddMpi21subwipconssitewhses />} />
                                <Route path="/update-Mpi21subwipconssitewhse/:recid" element={<UpdateMpi21subwipconssitewhses />} />

                                <Route path="/Mpi21subwipconssetupheader" element={<Mpi21subwipconssetupheadersTable />} />
                                <Route path="/add-Mpi21subwipconssetupheader" element={<AddMpi21subwipconssetupheaders />} />
                                <Route path="/update-Mpi21subwipconssetupheader/:recid" element={<UpdateMpi21subwipconssetupheaders />} />

                                <Route path="/Mpi21subwipconsitemgroup" element={<Mpi21subwipconsitemgroupsTable />} />
                                <Route path="/add-Mpi21subwipconsitemgroup" element={<AddMpi21subwipconsitemgroups />} />
                                <Route path="/update-Mpi21subwipconsitemgroup/:recid" element={<UpdateMpi21subwipconsitemgroups />} />

                                <Route path="/Mpi21_Stockfeeditemwarehouse" element={<Mpi21StockfeeditemwarehousesTable />} />
                                <Route path="/add-Mpi21Stockfeeditemwarehouse" element={<AddMpi21Stockfeeditemwarehouses />} />
                                <Route path="/update-Mpi21Stockfeeditemwarehouse/:recid" element={<UpdateMpi21Stockfeeditemwarehouses />} />

                                <Route path="/Mpi21_Stockfeeditemlocation" element={<Mpi21StockfeeditemlocationsTable />} />
                                <Route path="/add-Mpi21Stockfeeditemlocation" element={<AddMpi21Stockfeeditemlocations />} />
                                <Route path="/update-Mpi21Stockfeeditemlocation/:recid" element={<UpdateMpi21Stockfeeditemlocations />} />

                                <Route path="/Mpi21locationtype" element={<Mpi21locationtypesTable />} />
                                <Route path="/add-Mpi21locationtype" element={<AddMpi21locationtypes />} />
                                <Route path="/update-Mpi21locationtype/:recid" element={<UpdateMpi21locationtypes />} />

                                <Route path="/Mpi21inventorymovementsetup" element={<Mpi21inventorymovementsetupsTable />} />
                                <Route path="/add-Mpi21inventorymovementsetup" element={<AddMpi21inventorymovementsetups />} />
                                <Route path="/update-Mpi21inventorymovementsetup/:recid" element={<UpdateMpi21inventorymovementsetups />} />

                                <Route path="/Mpi21ictransfersetup" element={<Mpi21ictransfersetupsTable />} />
                                <Route path="/add-Mpi21ictransfersetup" element={<AddMpi21ictransfersetups />} />
                                <Route path="/update-Mpi21ictransfersetup/:recid" element={<UpdateMpi21ictransfersetups />} />

                                <Route path="/Mpi21blenddemandsitewhse" element={<Mpi21blenddemandsitewhsesTable />} />
                                <Route path="/add-Mpi21blenddemandsitewhse" element={<AddMpi21blenddemandsitewhses />} />
                                <Route path="/update-Mpi21blenddemandsitewhse/:recid" element={<UpdateMpi21blenddemandsitewhses />} />

                                <Route path="/Mpi21blenddemandsetup" element={<Mpi21blenddemandsetupsTable />} />
                                <Route path="/add-Mpi21blenddemandsetup" element={<AddMpi21blenddemandsetups />} />
                                <Route path="/update-Mpi21blenddemandsetup/:recid" element={<UpdateMpi21blenddemandsetups />} />

                                <Route path="/Mpi21blenddemandordertype" element={<Mpi21blenddemandordertypesTable />} />
                                <Route path="/add-Mpi21blenddemandordertype" element={<AddMpi21blenddemandordertypes />} />
                                <Route path="/update-Mpi21blenddemandordertype/:recid" element={<UpdateMpi21blenddemandordertypes />} />

                                <Route path="/Mpadjreasoncode" element={<MpadjreasoncodesTable />} />
                                <Route path="/add-mpadjreasoncode" element={<AddMpadjreasoncodes />} />
                                <Route path="/update-mpadjreasoncode/:recid" element={<UpdateMpadjreasoncodes />} />

                                <Route path="/MplogilityCustReditrectRef" element={<MplogilityCustReditrectRefs />} />
                                <Route path="/add-mplogilityCustReditrectRefs" element={<AddmplogilityCustReditrectRefs />} />
                                <Route path="/update-mplogilityCustReditrectRefs/:recid" element={<UpdatemplogilityCustReditrectRefs />} />

                                <Route path="/mpinterfacelegacyid" element={<Mpinterfacelegacyids />} />
                                <Route path="/add-mpinterfacelegacyids" element={<Addmpinterfacelegacyids />} />
                                <Route path="/update-mpinterfacelegacyids/:recid" element={<Updatempinterfacelegacyids />} />

                                <Route path="/Mpinterfaces" element={<Mpinterfaces />} />
                                <Route path="/add-mpinterfaces" element={<Addmpinterfaces />} />
                                <Route path="/update-mpinterfaces/:interfaceid" element={<Updatempinterfaces />} />

                                <Route path="/Mpi21blenddemanditemgroup" element={<Mpi21blenddemanditemgroup />} />
                                <Route path="/add-mpi21blenddemanditemgroup" element={<Addmpi21blenddemanditemgroup />} />
                                <Route path="/update-mpi21blenddemanditemgroup/:recid" element={<UpdateMpi21blenddemanditemgroup />} />

                                <Route path="/Processingstatus" element={<Processingstatus />} />
                                <Route path="/add-processingstatus" element={<Addprocessingstatus />} />
                                <Route path="/update-processingstatus/:processingstatus1" element={<Updateprocessingstatus />} />

                                <Route path="/Tmsparameters" element={<Tmsparameters />} />
                                <Route path="/add-tmsparameters" element={<Addtmsparameters />} />
                                <Route path="/update-tmsparameters/:recid" element={<Updatetmsparameters />} />

                                <Route path="/wrkctrcapability" element={<Wrkctrcapabilities />} />
                                <Route path="/add-wrkctrcapabilities" element={<Addwrkctrcapabilities />} />
                                <Route path="/update-wrkctrcapabilities/:recid" element={<Updatewrkctrcapabilities />} />

                                <Route path="/Routeoprtable" element={<Routeoprtables />} />
                                <Route path="/add-RouteoprtablesTables" element={<Addrouteoprtables />} />
                                <Route path="/update-routeoprtables/:recid" element={<Updaterouteoprtables />} />

                                <Route path="/Wrkctrcapabilityresource" element={<Wrkctrcapabilityresources />} />
                                <Route path="/add-wrkctrcapabilityresources" element={<Addwrkctrcapabilityresources />} />
                                <Route path="/update-wrkctrcapabilityresources/:recid" element={<Updatewrkctrcapabilityresources />} />

                                <Route path="/Mpi21rawmatdemandsetup" element={<Mpi21rawmatdemandsetup />} />
                                <Route path="/add-mpi21rawmatdemandsetup" element={<AddMpi21rawmatdemandsetup />} />
                                <Route path="/update-mpi21rawmatdemandsetup/:recid" element={<UpdateMpi21rawmatdemandsetup />} />

                                <Route path="/Mpi21rawmatdemandordertype" element={<Mpi21rawmatdemandordertype />} />
                                <Route path="/add-mpi21rawmatdemandordertype" element={<AddMpi21rawmatdemandordertype />} />
                                <Route path="/update-mpi21rawmatdemandordertype/:recid" element={<UpdateMpi21rawmatdemandordertype />} />

                                <Route path="/Mpvendorsubgrouptable" element={<Mpvendorsubgrouptables />} />
                                <Route path="/add-mpvendorsubgrouptables" element={<AddMpvendorsubgrouptables />} />
                                <Route path="/update-mpvendorsubgrouptables/:recid" element={<UpdateMpvendorsubgrouptables />} />

                                <Route path="/Mpi21rawmatdemanditemgroup" element={<Mpi21rawmatdemanditemgroupTable />} />
                                <Route path="/add-mpi21rawmatdemanditemgroup" element={<AddMpi21rawmatdemanditemgroup />} />
                                <Route path="/update-mpi21rawmatdemanditemgroup/:recid" element={<UpdateMpi21rawmatdemanditemgroup />} />

                                <Route path="/Mpprobatdmslocation" element={<MpprobatdmslocationsTable />} />
                                <Route path="/add-mpprobatdmslocations" element={<AddMpprobatdmslocations />} />
                                <Route path="/update-mpprobatdmslocations/:recid" element={<UpdateMpprobatdmslocations />} />

                                <Route path="/Mpprobatlocation" element={<MpprobatlocationsTable />} />
                                <Route path="/add-mpprobatlocations" element={<AddMpprobatlocations />} />
                                <Route path="/update-mpprobatlocations/:recid" element={<UpdateMpprobatlocations />} />

                                <Route path="/Mplogilityinterfaceexportinclitemgroups" element={<MplogilityinterfaceexportinclitemgroupsTable />} />
                                <Route path="/add-mplogilityinterfaceexportinclitemgroups" element={<AddMplogilityinterfaceexportinclitemgroups />} />
                                <Route path="/update-mplogilityinterfaceexportinclitemgroups/:recid" element={<UpdateMplogilityinterfaceexportinclitemgroups />} />

                                <Route path="/Mplogilityinterfaceexportexclcustomers" element={<MplogilityinterfaceexportexclcustomersTable />} />
                                <Route path="/add-mplogilityinterfaceexportexclcustomers" element={<AddMplogilityinterfaceexportexclcustomers />} />
                                <Route path="/update-mplogilityinterfaceexportexclcustomers/:recid" element={<UpdateMplogilityinterfaceexportexclcustomers />} />

                                <Route path="/Mpi21rawmatdemandsitewhse" element={<Mpi21rawmatdemandsitewhseTable />} />
                                <Route path="/add-mpi21rawmatdemandsitewhse" element={<AddMpi21rawmatdemandsitewhse />} />
                                <Route path="/update-mpi21rawmatdemandsitewhse/:recid" element={<UpdateMpi21rawmatdemandsitewhse />} />


                                <Route path="/Mpi21transferinterandintraheader" element={<Mpi21transferinterandintraheaderTable />} />
                                <Route path="/add-mpi21transferinterandintraheader" element={<AddMpi21transferinterandintraheader />} />
                                <Route path="/update-mpi21transferinterandintraheader/:recid" element={<UpdateMpi21transferinterandintraheader />} />

                                {/* NOTEXIST */}
                                <Route path="/MPI21_STOCKFEED" element={<Mpi21StockfeedTable />} />
                                <Route path="/add-mpi21stockfeed" element={<AddMpi21Stockfeed />} />
                                <Route path="/update-MPI21_STOCKFEED/:recid" element={<UpdateMpi21Stockfeed />} />


                                <Route path="/Mpi21storageunitheader" element={<Mpi21storageunitheaderTable />} />
                                <Route path="/add-mpi21storageunitheader" element={<AddMpi21storageunitheader />} />
                                <Route path="/update-mpi21storageunitheader/:recid" element={<UpdateMpi21storageunitheader />} />


                                <Route path="/Mpi21subwipconsumption" element={<Mpi21subwipconsumptionTable />} />
                                <Route path="/add-mpi21subwipconsumption" element={<AddMpi21subwipconsumption />} />
                                <Route path="/update-mpi21subwipconsumption/:recid" element={<UpdateMpi21subwipconsumption />} />


                                <Route path="/MpinterfaceNotes" element={<MpinterfaceNotesTable />} />
                                <Route path="/add-mpinterfacenotes" element={<AddMpinterfaceNotes />} />
                                <Route path="/update-mpinterfacenotes/:recid" element={<UpdateMpinterfaceNotes />} />

                                <Route path="/MppaymentOutboundDataContract" element={<MppaymentOutboundDataContractTable />} />
                                <Route path="/add-mppaymentoutbounddatacontract" element={<AddMppaymentOutboundDataContract />} />
                                <Route path="/update-mppaymentoutbounddatacontract/:recid" element={<UpdateMppaymentOutboundDataContract />} />

                                <Route path="/Mpwebsettlemappingtable" element={<MpwebsettlemappingtableTable />} />
                                <Route path="/add-mpwebsettlemappingtable" element={<AddMpwebsettlemappingtable />} />
                                <Route path="/update-mpwebsettlemappingtable/:recid" element={<UpdateMpwebsettlemappingtable />} />

                                <Route path="/MPI21COMMITMENTPRICINGBGNHEADER" element={<MPI21COMMITMENTPRICINGBGNHEADERTable />} />
                                <Route path="/add-MPI21COMMITMENTPRICINGBGNHEADER" element={<AddMPI21COMMITMENTPRICINGBGNHEADER />} />
                                <Route path="/update-MPI21COMMITMENTPRICINGBGNHEADER/:recid" element={<UpdateMPI21COMMITMENTPRICINGBGNHEADER />} />
                                <Route path="/view-MPI21COMMITMENTPRICINGBGNHEADER/:recid" element={<ViewMPI21COMMITMENTPRICINGBGNHEADER />} />

                                <Route path="/MPI21COMMITMENTPRICINGBGNLINE" element={<ViewMPI21COMMITMENTPRICINGBGNHEADER />} />
                                <Route path="/add-MPI21COMMITMENTPRICINGBGNLINE" element={<AddMPI21COMMITMENTPRICINGBGNLINE />} />


                                <Route path="/Mpi21routeheader" element={<Mpi21routeheaders />} />
                                <Route path="/add-Mpi21routeheaders" element={<AddMpi21routeheaders />} />
                                <Route path="/update-MPI21ROUTEHEADER/:recid" element={<UpdateMpi21routeheaders />} />

                                <Route path="/Mpi21recipeheader" element={<Mpi21recipeheaders />} />
                                <Route path="/add-Mpi21recipeheaders" element={<AddMpi21recipeheaders />} />
                                <Route path="/update-MPi21RecipeHeader/:recid" element={<UpdateMpi21recipeheaders />} />

                                <Route path="/Mpi21prodorderinheader" element={<Mpi21prodorderinheaders />} />
                                <Route path="/add-Mpi21prodorderinheaders" element={<AddMpi21prodorderinheaders />} />
                                <Route path="/update-MPI21PRODORDERINHEADER/:recid" element={<UpdateMpi21prodorderinheaders />} />

                                <Route path="/Mpi21prodconsoutputinheader" element={<Mpi21prodconsoutputinheaders />} />
                                <Route path="/add-Mpi21prodconsoutputinheaders" element={<AddMpi21prodconsoutputinheaders />} />
                                <Route path="/update-MPI21PRODCONSOUTPUTINHEADER/:recid" element={<UpdateMpi21prodconsoutputinheaders />} />

                                <Route path="/Mpi21itemmasterheader" element={<Mpi21itemmasterheaders />} />
                                <Route path="/add-Mpi21itemmasterheaders" element={<AddMpi21itemmasterheaders />} />
                                <Route path="/update-MPI21ITEMMASTERHEADER/:recid" element={<UpdateMpi21itemmasterheaders />} />

                                <Route path="/Mpi21inventorymovementheader" element={<Mpi21inventorymovementheaders />} />
                                <Route path="/add-Mpi21inventorymovementheaders" element={<AddMpi21inventorymovementheaders />} />
                                <Route path="/update-MPI21INVENTORYMOVEMENTHEADER/:recid" element={<UpdateMpi21inventorymovementheaders />} />


                                <Route path="/Mpaveworkorderheader" element={<Mpaveworkorderheaders />} />
                                <Route path="/add-Mpaveworkorderheaders" element={<AddMpaveworkorderheaders />} />
                                <Route path="/update-Mpaveworkorderheaders/:recid" element={<UpdateMpaveworkorderheaders />} />

                                <Route path="/Mpaverafexported" element={<Mpaverafexporteds />} />
                                <Route path="/add-Mpaverafexporteds" element={<AddMpaverafexporteds />} />
                                <Route path="/update-Mpaverafexporteds/:recid" element={<UpdateMpaverafexporteds />} />

                                <Route path="/Mpaveprodorderrafheader" element={<Mpaveprodorderrafheaders />} />
                                <Route path="/add-Mpaveprodorderrafheaders" element={<AddMpaveprodorderrafheaders />} />
                                <Route path="/update-Mpaveprodorderrafheaders/:recid" element={<UpdateMpaveprodorderrafheaders />} />

                                <Route path="/Mpaveprodorderpickingheader" element={<Mpaveprodorderpickingheaders />} />
                                <Route path="/add-Mpaveprodorderpickingheaders" element={<AddMpaveprodorderpickingheaders />} />
                                <Route path="/update-Mpaveprodorderpickingheaders/:recid" element={<UpdateMpaveprodorderpickingheaders />} />

                                <Route path="/Mpi21storageunitexportstatus" element={<Mpi21storageunitexportstatuss />} />
                                <Route path="/add-Mpi21storageunitexportstatuss" element={<AddMpi21storageunitexportstatuss />} />
                                <Route path="/update-Mpi21storageunitexportstatuss/:recid" element={<UpdateMpi21storageunitexportstatuss />} />



                                <Route path="/MpinterfaceEndProduction" element={<MpinterfaceEndProductions />} />
                                <Route path="/add-MpinterfaceEndProductions" element={<AddMpinterfaceEndProductions />} />
                                <Route path="/update-MpinterfaceEndProductions/:recid" element={<UpdateMpinterfaceEndProductions />} />

                                <Route path="/Mpinterfaceitemtable" element={<Mpinterfaceitemtables />} />
                                <Route path="/add-Mpinterfaceitemtables" element={<AddMpinterfaceitemtables />} />
                                <Route path="/update-Mpinterfaceitemtables/:recid" element={<UpdateMpinterfaceitemtables />} />


                                <Route path="/MpinterfaceMatConsTable" element={<MpinterfaceMatConsTables />} />
                                <Route path="/add-MpinterfaceMatConsTables" element={<AddMpinterfaceMatConsTables />} />
                                <Route path="/update-MpinterfaceMatConsTables/:recid" element={<UpdateMpinterfaceMatConsTables />} />


                                <Route path="/Mpinterfaceprodtable" element={<Mpinterfaceprodtables />} />
                                <Route path="/add-Mpinterfaceprodtables" element={<AddMpinterfaceprodtables />} />
                                <Route path="/update-Mpinterfaceprodtables/:recid" element={<UpdateMpinterfaceprodtables />} />

                                <Route path="/MpinterfaceTransferOrder" element={<MpinterfaceTransferOrders />} />
                                <Route path="/add-MpinterfaceTransferOrders" element={<AddMpinterfaceTransferOrders />} />
                                <Route path="/update-MpinterfaceTransferOrders/:recid" element={<UpdateMpinterfaceTransferOrders />} />


                                <Route path="/Mpinventtranstracking_Exporttransferord" element={<Mpinventtranstracking_Exporttransferords />} />
                                <Route path="/add-Mpinventtranstracking_Exporttransferords" element={<AddMpinventtranstracking_Exporttransferords />} />
                                <Route path="/update-Mpinventtranstracking_Exporttransferords/:recid" element={<UpdateMpinventtranstracking_Exporttransferords />} />


                                <Route path="/Mporderplanmappingtable" element={<Mporderplanmappingtables />} />
                                <Route path="/add-Mporderplanmappingtables" element={<AddMporderplanmappingtables />} />
                                <Route path="/update-Mporderplanmappingtables/:recid" element={<UpdateMporderplanmappingtables />} />

                                <Route path="/MpinterfaceLocationInventory" element={<MpinterfaceLocationInventoryTable />} />
                                <Route path="/add-mpinterfaceLocationInventory" element={<AddMpinterfaceLocationInventory />} />
                                <Route path="/update-mpinterfaceLocationInventory/:recid" element={<UpdateMpinterfaceLocationInventory />} />

                                <Route path="/MpinterfaceItemReceipt" element={<MpinterfaceItemReceiptTable />} />
                                <Route path="/add-MpinterfaceItemReceipt" element={<AddMpinterfaceItemReceipt />} />
                                <Route path="/update-MpinterfaceItemReceipt/:recid" element={<UpdateMpinterfaceItemReceipt />} />

                                <Route path="/MpinterfaceDemandForecast" element={<MpinterfaceDemandForecastTable />} />
                                <Route path="/add-MpinterfaceDemandForecast" element={<AddMpinterfaceDemandForecast />} />
                                <Route path="/update-MpinterfaceDemandForecast/:recid" element={<UpdateMpinterfaceDemandForecast />} />

                                <Route path="/MPHaviSetupTable" element={<MPHaviSetupTableTable />} />
                                <Route path="/add-MPHaviSetupTable"element={<AddMPHaviSetupTable />} />
                                <Route path="/update-MPHaviSetupTable/:recid" element={<UpdateMPHaviSetupTable />} />
                                
                                <Route path="/MPConcurExpensesReimbursed" element={<MPConcurExpensesReimbursedTable />} />
                                <Route path="/add-MPConcurExpensesReimbursed"element={<AddMPConcurExpensesReimbursed />} />
                                <Route path="/update-MPConcurExpensesReimbursed/:recid" element={<UpdateMPConcurExpensesReimbursed />} />
                             
                                <Route path="/MPTmpHavi852ExportTable" element={<MPTmpHavi852ExportTableTable />} />
                                <Route path="/add-MPTmpHavi852ExportTable"element={<AddMPTmpHavi852ExportTable />} />
                                <Route path="/update-MPTmpHavi852ExportTable/:recid" element={<UpdateMPTmpHavi852ExportTable />} />

                                <Route path="/MPTmpHaviExportTable" element={<MPTmpHaviExportTableTable />} />
                                <Route path="/add-MPTmpHaviExportTable"element={<AddMPTmpHaviExportTable />} />
                                <Route path="/update-MPTmpHaviExportTable/:recid" element={<UpdateMPTmpHaviExportTable />} />


                                <Route path="/MPSQLTrCustGroup" element={<MPSQLTrCustGroupTable />} />
                                <Route path="/add-MPSQLTrCustGroup"element={<AddMPSQLTrCustGroup />} />
                                <Route path="/update-MPSQLTrCustGroup/:recid" element={<UpdateMPSQLTrCustGroup />} />

                                <Route path="/MPSQLTrItem" element={<MPSQLTrItemTable />} />
                                <Route path="/add-MPSQLTrItem"element={<AddMPSQLTrItem />} />
                                <Route path="/update-MPSQLTrItem/:recid" element={<UpdateMPSQLTrItem />} />


                                <Route path="/Mp_qasensoryappstagingtable" element={<Mp_qasensoryappstagingtableTable />} />
                                <Route path="/add-Mp_qasensoryappstagingtable"element={<AddMp_qasensoryappstagingtable />} />
                                <Route path="/update-Mp_qasensoryappstagingtable/:recid" element={<UpdateMp_qasensoryappstagingtable />} />

                                {/* Latest Config Routes */}

                                <Route path="/Mpenums" element={<MpenumTable />} />
                                <Route path="/add-Mpenumss" element={<AddMpenum />} />
                                <Route path="/update-Mpenumss/:recid" element={<UpdateMpenum />} />

                                <Route path="/AveWhLocations" element={<AveWhLocationsTable />} />
                                <Route path="/add-AveWhLocationss" element={<AddAveWhLocations />} />
                                <Route path="/update-AveWhLocationss/:recid" element={<UpdateAveWhLocations />} />

                                <Route path="/Mpprobatequipmentxreftable" element={<MpprobatequipmentxreftableTable />} />
                                <Route path="/add-Mpprobatequipmentxreftables" element={<AddMpprobatequipmentxreftable />} />
                                <Route path="/update-Mpprobatequipmentxreftables/:recid" element={<UpdateMpprobatequipmentxreftable />} />

                                <Route path="/MpaveParameters" element={<MpaveParameterTable />} />
                                <Route path="/add-MpaveParameters" element={<AddMpaveParameter />} />
                                <Route path="/update-MpaveParameters/:recid" element={<UpdateMpaveParameter />} />

                                <Route path="/MplogilityWarehouseReference" element={<MplogilityWarehouseReferenceTable />} />
                                <Route path="/add-MplogilityWarehouseReferences" element={<AddMplogilityWarehouseReference />} />
                                <Route path="/update-MplogilityWarehouseReferences/:recid" element={<UpdateMplogilityWarehouseReference />} />

                                <Route path="/Mpaveinventtable" element={<MpaveinventtableTable />} />
                                <Route path="/add-Mpaveinventtables" element={<AddMpaveinventtable />} />
                                <Route path="/update-Mpaveinventtables/:recid" element={<UpdateMpaveinventtable />} />

                                <Route path="/Mpaveinventitemgroup" element={<MpaveinventitemgroupTable />} />
                                <Route path="/add-Mpaveinventitemgroups" element={<AddMpaveinventitemgroup />} />
                                <Route path="/update-Mpaveinventitemgroups/:recid" element={<UpdateMpaveinventitemgroup />} />

                                <Route path="/MPProbatAvevaGroundLocations" element={<MPProbatAvevaGroundLocationsTable />} />
                                <Route path="/add-MPProbatAvevaGroundLocationss" element={<AddMPProbatAvevaGroundLocations />} />
                                <Route path="/update-MPProbatAvevaGroundLocationss/:recid" element={<UpdateMPProbatAvevaGroundLocations />} />

                                <Route path="/MpinforUnitConversion" element={<MpinforUnitConversionTable />} />
                                <Route path="/add-MpinforUnitConversions" element={<AddMpinforUnitConversion />} />
                                <Route path="/update-MpinforUnitConversions/:recid" element={<UpdateMpinforUnitConversion />} />

                                <Route path="/MpinforTransition" element={<MpinforTransitionTable />} />
                                <Route path="/add-MpinforTransitions" element={<AddMpinforTransition />} />
                                <Route path="/update-MpinforTransitions/:recid" element={<UpdateMpinforTransition />} />

                                <Route path="/MpinforProdPoolConfig" element={<MpinforProdPoolConfigTable />} />
                                <Route path="/add-MpinforProdPoolConfigs" element={<AddMpinforProdPoolConfig />} />
                                <Route path="/update-MpinforProdPoolConfigs/:recid" element={<UpdateMpinforProdPoolConfig />} />

                                <Route path="/MpinforMasterPlanConfig" element={<MpinforMasterPlanConfigTable />} />
                                <Route path="/add-MpinforMasterPlanConfigs" element={<AddMpinforMasterPlanConfig />} />
                                <Route path="/update-MpinforMasterPlanConfigs/:recid" element={<UpdateMpinforMasterPlanConfig />} />

                                <Route path="/MpinforItemGroupTable" element={<MpinforItemGroupTableTable />} />
                                <Route path="/add-MpinforItemGroupTables" element={<AddMpinforItemGroupTable />} />
                                <Route path="/update-MpinforItemGroupTables/:recid" element={<UpdateMpinforItemGroupTable />} />

                                <Route path="/Mpexchratesexpparams" element={<MpexchratesexpparamsTable />} />
                                <Route path="/add-Mpexchratesexpparamss" element={<AddMpexchratesexpparams />} />
                                <Route path="/update-Mpexchratesexpparamss/:recid" element={<UpdateMpexchratesexpparams />} />

                                <Route path="/Mpbuygroupblends" element={<MpbuygroupblendsTable />} />
                                <Route path="/add-Mpbuygroupblendss" element={<AddMpbuygroupblends />} />
                                <Route path="/update-Mpbuygroupblendss/:recid" element={<UpdateMpbuygroupblends />} />

                                <Route path="/Mpcommitbuygroup" element={<MpcommitbuygroupTable />} />
                                <Route path="/add-Mpcommitbuygroups" element={<AddMpcommitbuygroup />} />
                                <Route path="/update-Mpcommitbuygroups/:recid" element={<UpdateMpcommitbuygroup />} />

                                <Route path="/Mpi21_Interfacejournalnames" element={<Mpi21_InterfacejournalnamesTable />} />
                                <Route path="/add-Mpi21_Interfacejournalnamess" element={<AddMpi21_Interfacejournalnames />} />
                                <Route path="/update-Mpi21_Interfacejournalnamess/:recid" element={<UpdateMpi21_Interfacejournalnames />} />

                                <Route path="/Mpi21_Quantityadjustmentsreasoncodes" element={<Mpi21_QuantityadjustmentsreasoncodesTable />} />
                                <Route path="/add-Mpi21_Quantityadjustmentsreasoncodess" element={<AddMpi21_Quantityadjustmentsreasoncodes />} />
                                <Route path="/update-Mpi21_Quantityadjustmentsreasoncodess/:recid" element={<UpdateMpi21_Quantityadjustmentsreasoncodes />} />

                                <Route path="/Mpi21_Quantityadjustmentssetup" element={<Mpi21_QuantityadjustmentssetupTable />} />
                                <Route path="/add-Mpi21_Quantityadjustmentssetups" element={<AddMpi21_Quantityadjustmentssetup />} />
                                <Route path="/update-Mpi21_Quantityadjustmentssetups/:recid" element={<UpdateMpi21_Quantityadjustmentssetup />} />

                                <Route path="/Mpcommodblenddiffs" element={<MpcommodblenddiffsTable />} />
                                <Route path="/add-Mpcommodblenddiffss" element={<AddMpcommodblenddiffs />} />
                                <Route path="/update-Mpcommodblenddiffss/:recid" element={<UpdateMpcommodblenddiffs />} />

                                <Route path="/Mpcommodorders" element={<MpcommodordersTable />} />
                                <Route path="/add-Mpcommodorderss" element={<AddMpcommodorders />} />
                                <Route path="/update-Mpcommodorderss/:recid" element={<UpdateMpcommodorders />} />

                                {/* Latest Config Routes ends */}

                                {/* Settings Routes */}

                                <Route path="/MPTablesInterfaceMapping" element={<MPTablesInterfaceMapping />} />
                                <Route path="/add-MPTablesInterfaceMapping" element={<AddMPTablesInterfaceMapping />} />
                                <Route path="/update-MPTablesInterfaceMapping/:recid" element={<UpdateMPTablesInterfaceMapping />} />

                                <Route path="/UserInterfaceMapping" element={<UserInterfaceMapping />} />
                                <Route path="/add-UserInterfaceMapping" element={<AddUserInterfaceMapping />} />
                                <Route path="/update-UserInterfaceMapping/:recid" element={<UpdateUserInterfaceMapping />} />

                                <Route path="/UserLogin" element={<UserLogin />} />
                                <Route path="/add-UserLogin" element={<AddUserLogin />} />
                                <Route path="/update-UserLogin/:recid" element={<UpdateUserLogin />} />

                                {/* HEADER PROBAT TABLE */}
                                <Route path="/MpinterfaceRafadjustTable" element={<MpinterfaceRafadjustTablesTable />} />
                                <Route path="/add-MpinterfaceRafadjustTable" element={<AddMpinterfaceRafadjustTables />} />
                                <Route path="/update-MpinterfaceRafadjustTable/:recid" element={<UpdateMpinterfaceRafadjustTables />} />

                                <Route path="/MpinterfaceItemReceipt" element={<MpinterfaceItemReceiptsTable />} />
                                <Route path="/add-MpinterfaceItemReceipt" element={<AddMpinterfaceItemReceipts />} />
                                <Route path="/update-MpinterfaceItemReceipt/:recid" element={<UpdateMpinterfaceItemReceipts />} />

                                <Route path="/MpinterfaceTransferJourTable" element={<MpinterfaceTransferJourTablesTable />} />
                                <Route path="/add-MpinterfaceTransferJourTable" element={<AddMpinterfaceTransferJourTables />} />
                                <Route path="/update-MpinterfaceTransferJourTable/:recid" element={<UpdateMpinterfaceTransferJourTables />} />

                                <Route path="/MpinterfaceRouteTable" element={<MpinterfaceRouteTablesTable />} />
                                <Route path="/add-MpinterfaceRouteTable" element={<AddMpinterfaceRouteTables />} />
                                <Route path="/update-MpinterfaceRouteTable/:recid" element={<UpdateMpinterfaceRouteTables />} />

                                <Route path="/MpinterfaceProbatCommand" element={<MpinterfaceProbatCommandsTable />} />
                                <Route path="/add-MpinterfaceProbatCommand" element={<AddMpinterfaceProbatCommands />} />
                                <Route path="/update-MpinterfaceProbatCommand/:recid" element={<UpdateMpinterfaceProbatCommands />} />


                                <Route path="/MPI21_QUANTITYADJUSTMENT" element={<Mpi21QuantityadjustmentTable />} />
                                <Route path="/add-MPI21_QUANTITYADJUSTMENT" element={<AddMpi21Quantityadjustment />} />
                                <Route path="/update-MPI21_QUANTITYADJUSTMENT/:recid" element={<UpdateMpi21Quantityadjustment />} />



                                {/* Header Details */}

                                <Route path="/MPI21BLENDDEMANDSTAGING" element={<MPI21BLENDDEMANDSTAGINGTable />} />
                                <Route path="/add-MPI21BLENDDEMANDSTAGING" element={<AddMPI21BLENDDEMANDSTAGING />} />
                                <Route path="/update-MPI21BLENDDEMANDSTAGING/:recid" element={<UpdateMPI21BLENDDEMANDSTAGING />} />
                                <Route path="/view-MPI21BLENDDEMANDSTAGING/:recid" element={<ViewMPI21BLENDDEMANDSTAGING />} />

                                <Route path="/MPI21BLENDDEMANDLINE" element={<ViewMPI21BLENDDEMANDSTAGING />} />
                                <Route path="/add-MPI21BLENDDEMANDLINE" element={<AddMPI21BLENDDEMANDLINE />} />






                                <Route path="/MPI21PURCHASEORDERHEADER" element={<MPI21PURCHASEORDERHEADERTable />} />
                                <Route path="/add-MPI21PURCHASEORDERHEADER" element={<AddMPI21PURCHASEORDERHEADER />} />
                                <Route path="/update-MPI21PURCHASEORDERHEADER/:recid" element={<UpdateMPI21PURCHASEORDERHEADER />} />
                                <Route path="/view-MPI21PURCHASEORDERHEADER/:recid" element={<ViewMPI21PURCHASEORDERHEADER />} />

                                <Route path="/MPI21PURCHASEORDERLINE" element={<ViewMPI21PURCHASEORDERHEADER />} />
                                <Route path="/add-MPI21PURCHASEORDERLINE" element={<AddMPI21PURCHASEORDERLINE />} />






                                <Route path="/Mpi21servicepoinheader" element={<Mpi21servicepoinheadersTable />} />
                                <Route path="/add-Mpi21servicepoinheader" element={<AddMpi21servicepoinheaders />} />
                                <Route path="/update-Mpi21servicepoinheader/:recid" element={<UpdateMpi21servicepoinheaders />} />
                                <Route path="/view-Mpi21servicepoinheader/:recid" element={<ViewMpi21servicepoinheaders />} />

                                <Route path="/Mpi21servicepoinline" element={<ViewMpi21servicepoinheaders />} />
                                <Route path="/add-Mpi21servicepoinline" element={<AddMpi21servicepoinlines />} />







                                <Route path="/Mpi21vendormasterheader" element={<Mpi21vendormasterheadersTable />} />
                                <Route path="/add-Mpi21vendormasterheader" element={<AddMpi21vendormasterheaders />} />
                                <Route path="/update-Mpi21vendormasterheader/:recid" element={<UpdateMpi21vendormasterheaders />} />
                                <Route path="/view-Mpi21vendormasterheader/:recid" element={<ViewMpi21vendormasterheaders />} />

                                <Route path="/Mpi21vendormasterline" element={<ViewMpi21vendormasterheaders />} />
                                <Route path="/add-Mpi21vendormasterline" element={<AddMpi21vendormasterlines />} />




                                <Route path="/Mpi21transferreceiptheader" element={<Mpi21transferreceiptheadersTable />} />
                                <Route path="/add-Mpi21transferreceiptheaders" element={<AddMpi21transferreceiptheaders />} />
                                <Route path="/update-Mpi21transferreceiptheaders/:recid" element={<UpdateMpi21transferreceiptheaders />} />
                                <Route path="/view-Mpi21transferreceiptheaders/:recid" element={<ViewMpi21transferreceiptheaders />} />

                                <Route path="/Mpi21transferreceiptline" element={<ViewMpi21transferreceiptheaders />} />
                                <Route path="/add-Mpi21transferreceiptline" element={<AddMpi21transferreceiptlines />} />






                                <Route path="/MPI21RAWMATDEMANDSTAGING" element={<MPI21RAWMATDEMANDSTAGINGTable />} />
                                <Route path="/add-MPI21RAWMATDEMANDSTAGING" element={<AddMPI21RAWMATDEMANDSTAGING />} />
                                <Route path="/update-MPI21RAWMATDEMANDSTAGING/:recid" element={<UpdateMPI21RAWMATDEMANDSTAGING />} />
                                <Route path="/view-MPI21RAWMATDEMANDSTAGING/:recid" element={<ViewMPI21RAWMATDEMANDSTAGING />} />

                                <Route path="/MPI21RAWMATDEMANDLINE" element={<ViewMPI21RAWMATDEMANDSTAGING />} />
                                <Route path="/add-MPI21RAWMATDEMANDLINE" element={<AddMPI21RAWMATDEMANDLINE />} />








                                <Route path="/MPI21PURCHORDERNUMHEADER" element={<MPI21PURCHORDERNUMHEADERTable />} />
                                <Route path="/add-MPI21PURCHORDERNUMHEADER" element={<AddMPI21PURCHORDERNUMHEADER />} />
                                <Route path="/update-MPI21PURCHORDERNUMHEADER/:recid" element={<UpdateMPI21PURCHORDERNUMHEADER />} />
                                <Route path="/view-MPI21PURCHORDERNUMHEADER/:recid" element={<ViewMPI21PURCHORDERNUMHEADER />} />

                                <Route path="/MPI21PURCHORDERNUMLINE" element={<ViewMPI21PURCHORDERNUMHEADER />} />
                                <Route path="/add-MPI21PURCHORDERNUMLINE" element={<AddMPI21PURCHORDERNUMLINE />} />







                                <Route path="/MpsalesOrderCareHeader" element={<MpsalesOrderCareHeadersTable />} />
                                <Route path="/add-MpsalesOrderCareHeader" element={<AddMpsalesOrderCareHeaders />} />
                                <Route path="/update-MpsalesOrderCareHeader/:recid" element={<UpdateMpsalesOrderCareHeaders />} />
                                <Route path="/view-MpsalesOrderCareHeader/:recid" element={<ViewMpsalesOrderCareHeaders />} />

                                <Route path="/MpsalesOrderCareLine" element={<ViewMpsalesOrderCareHeaders />} />
                                <Route path="/add-MpsalesOrderCareLine" element={<AddMpsalesOrderCareLines />} />

                                <Route path="/MptransferOrderOutboundHeader" element={<MptransferOrderOutboundHeadersTable />} />
                                <Route path="/add-MptransferOrderOutboundHeader" element={<AddMptransferOrderOutboundHeaders />} />
                                <Route path="/update-MptransferOrderOutboundHeader/:recid" element={<UpdateMptransferOrderOutboundHeaders />} />
                                <Route path="/view-MptransferOrderOutboundHeader/:recid" element={<ViewMptransferOrderOutboundHeaders />} />

                                <Route path="/MptransferOrderOutboundLine" element={<ViewMptransferOrderOutboundHeaders />} />
                                <Route path="/add-MptransferOrderOutboundLine" element={<AddMptransferOrderOutboundLines />} />






                                {/* Header Details end */}

                                <Route path="/Mpi21itemstandardprice" element={<Mpi21itemstandardprices />} />
                                <Route path="/add-Mpi21itemstandardprice" element={<AddMpi21itemstandardprices />} />
                                <Route path="/update-Mpi21itemstandardprice/:recid" element={<UpdateMpi21itemstandardprices />} />

                                <Route path="/Mpi21_Itemchange" element={<Mpi21Itemchanges />} />
                                <Route path="/add-Mpi21Itemchanges" element={<AddMpi21Itemchanges />} />
                                <Route path="/update-Mpi21Itemchanges/:recid" element={<UpdateMpi21Itemchanges />} />


                                <Route path="/MPInterfaceAAForecast" element={<MpinterfaceAaforecastTable />} />
                                <Route path="/add-MPInterfaceAAForecast" element={<AddMpinterfaceAaforecast />} />
                                <Route path="/update-MPInterfaceAAForecast/:recid" element={<UpdateMpinterfaceAaforecast />} />

                                <Route path="/MpsalesOrderOutboundDataContract" element={<MpsalesOrderOutboundDataContract />} />
                                <Route path="/add-MpsalesOrderOutboundDataContract" element={<AddMpsalesOrderOutboundDataContract />} />
                                <Route path="/update-MpsalesOrderOutboundDataContract/:recid" element={<UpdateMpsalesOrderOutboundDataContract />} />

                                <Route path="/MpinforProdOrderTable" element={<MpinforProdOrderTable />} />
                                <Route path="/add-MpinforProdOrderTable" element={<AddMpinforProdOrderTable />} />
                                <Route path="/update-MpinforProdOrderTable/:recid" element={<UpdateMpinforProdOrderTable />} />

                                <Route path="/MpinforPlannedProdOrder" element={<MpinforPlannedProdOrder />} />
                                <Route path="/add-MpinforPlannedProdOrder" element={<AddMpinforPlannedProdOrder />} />
                                <Route path="/update-MpinforPlannedProdOrder/:recid" element={<UpdateMpinforPlannedProdOrder />} />


                                <Route path="/MPi21ChargeCodeSetup" element={<MPi21ChargeCodeSetupsTable />} />
                                <Route path="/add-MPi21ChargeCodeSetups" element={<AddMPi21ChargeCodeSetups />} />
                                <Route path="/update-MPi21ChargeCodeSetups/:recId" element={<UpdateMPi21ChargeCodeSetups />} />

                                <Route path="/Mpi21vendormappingtable" element={<Mpi21vendormappingtableTable />} />
                                <Route path="/add-Mpi21vendormappingtables" element={<AddMpi21vendormappingtable />} />
                                <Route path="/update-Mpi21vendormappingtables/:vendAccount" element={<UpdateMpi21vendormappingtable />} />

                                <Route path="/MPi21PurchasePoolConfig" element={<MPi21PurchasePoolConfigTable />} />
                                <Route path="/add-MPi21PurchasePoolConfigs" element={<AddMPi21PurchasePoolConfig />} />
                                <Route path="/update-MPi21PurchasePoolConfigs/:recId" element={<UpdateMPi21PurchasePoolConfig />} />

                                <Route path="/MPi21FinancialDimensions" element={<MPi21FinancialDimensionsTable />} />
                                <Route path="/add-MPi21FinancialDimensionss" element={<AddMPi21FinancialDimensions />} />
                                <Route path="/update-MPi21FinancialDimensionss/:recId" element={<UpdateMPi21FinancialDimensions />} />

                                <Route path="/Mpi21exchangerate" element={<Mpi21exchangeratesTable />} />
                                <Route path="/add-Mpi21exchangerate" element={<AddMpi21exchangerates />} />
                                <Route path="/update-Mpi21exchangerate/:recId" element={<UpdateMpi21exchangerates />} />


                                <Route path="/Mpi21_lotpropertyadjustmenttable" element={<Mpi21_lotpropertyadjustmenttablesTable />} />
                                <Route path="/add-Mpi21_lotpropertyadjustmenttable" element={<AddMpi21_lotpropertyadjustmenttables />} />
                                <Route path="/update-Mpi21_lotpropertyadjustmenttable/:recid" element={<UpdateMpi21_lotpropertyadjustmenttables />} />

                                <Route path="/MpinforWrkCtrCapabilityResource" element={<MpinforWrkCtrCapabilityResource />} />
                                <Route path="/add-MpinforWrkCtrCapabilityResource" element={<AddMpinforWrkCtrCapabilityResource />} />
                                <Route path="/update-MpinforWrkCtrCapabilityResource/:recid" element={<UpdateMpinforWrkCtrCapabilityResource />} />


                                <Route path="/MpinforWrkCtrResourceGroupResource" element={<MpinforWrkCtrResourceGroupResource />} />
                                <Route path="/add-MpinforWrkCtrResourceGroupResource" element={<AddMpinforWrkCtrResourceGroupResource />} />
                                <Route path="/update-MpinforWrkCtrResourceGroupResource/:recid" element={<UpdateMpinforWrkCtrResourceGroupResource />} />

                                <Route path="/MpinforInventOnHand" element={<MpinforInventOnHand />} />
                                <Route path="/add-MpinforInventOnHand" element={<AddMpinforInventOnHand />} />
                                <Route path="/update-MpinforInventOnHand/:recid" element={<UpdateMpinforInventOnHand />} />

                                <Route path="/MpinforReqTransPo" element={<MpinforReqTransPo />} />
                                <Route path="/add-MpinforReqTransPo" element={<AddMpinforReqTransPo />} />
                                <Route path="/update-MpinforReqTransPo/:recid" element={<UpdateMpinforReqTransPo />} />

                                <Route path="/MpinforInventTransferTable" element={<MpinforInventTransferTable />} />
                                <Route path="/add-MpinforInventTransferTable" element={<AddMpinforInventTransferTable />} />
                                <Route path="/update-MpinforInventTransferTable/:recid" element={<UpdateMpinforInventTransferTable />} />

                                <Route path="/MpinforItemMaster" element={<MpinforItemMasterTable />} />
                                <Route path="/add-MpinforItemMasters" element={<AddMpinforItemMaster />} />
                                <Route path="/update-MpinforItemMasters/:recid" element={<UpdateMpinforItemMaster />} />

                                <Route path="/MpinforRouteVersion" element={<MpinforRouteVersionTable />} />
                                <Route path="/add-MpinforRouteVersions" element={<AddMpinforRouteVersion />} />
                                <Route path="/update-MpinforRouteVersions/:recid" element={<UpdateMpinforRouteVersion />} />

                                <Route path="/MpinforWrkCtrResourceGroup" element={<MpinforWrkCtrResourceGroupTable />} />
                                <Route path="/add-MpinforWrkCtrResourceGroups" element={<AddMpinforWrkCtrResourceGroup />} />
                                <Route path="/update-MpinforWrkCtrResourceGroups/:recid" element={<UpdateMpinforWrkCtrResourceGroup />} />

                                <Route path="/MpinforWrkCtrTable" element={<MpinforWrkCtrTableTable />} />
                                <Route path="/add-MpinforWrkCtrTables" element={<AddMpinforWrkCtrTable />} />
                                <Route path="/update-MpinforWrkCtrTables/:recid" element={<UpdateMpinforWrkCtrTable />} />


                                <Route path="/MpinforProdBatchOrderHeaderEntity" element={<MpinforProdBatchOrderHeaderEntityTable />} />
                                <Route path="/add-MpinforProdBatchOrderHeaderEntitys" element={<AddMpinforProdBatchOrderHeaderEntity />} />
                                <Route path="/update-MpinforProdBatchOrderHeaderEntitys/:recid" element={<UpdateMpinforProdBatchOrderHeaderEntity />} />


                                <Route path="/MpinforProdOrderCancel" element={<MpinforProdOrderCancelTable />} />
                                <Route path="/add-MpinforProdOrderCancels" element={<AddMpinforProdOrderCancel />} />
                                <Route path="/update-MpinforProdOrderCancels/:recid" element={<UpdateMpinforProdOrderCancel />} />


                                <Route path="/MpinforPurchTable" element={<MpinforPurchTableTable />} />
                                <Route path="/add-MpinforPurchTables" element={<AddMpinforPurchTable />} />
                                <Route path="/update-MpinforPurchTables/:recid" element={<UpdateMpinforPurchTable />} />

                                <Route path="/Mpi21inventorymovementexported" element={<Mpi21inventorymovementexported />} />
                                <Route path="/add-Mpi21inventorymovementexporteds" element={<AddMpi21inventorymovementexported />} />
                                <Route path="/update-Mpi21inventorymovementexporteds/:recid" element={<UpdateMpi21inventorymovementexported />} />

                                <Route path="/MpinterfaceFfhhforecast" element={<MpinterfaceFfhhforecast />} />
                                <Route path="/add-MpinterfaceFfhhforecast" element={<AddMpinterfaceFfhhforecast />} />
                                <Route path="/update-MpinterfaceFfhhforecast/:recid" element={<UpdateMpinterfaceFfhhforecast />} />

                                <Route path="/MpinterfaceBomheaderTable" element={<MpinterfaceBomheaderTablesTable />} />
                                <Route path="/add-MpinterfaceBomheaderTables" element={<AddMpinterfaceBomheaderTables />} />
                                <Route path="/update-MpinterfaceBomheaderTables/:recid" element={<UpdateMpinterfaceBomheaderTables />} />
                                <Route path="/view-MpinterfaceBomheaderTables/:recid" element={<ViewMpinterfaceBomheaderTables />} />

                                <Route path="/MPInterfaceBOMLineTable" element={<ViewMpinterfaceBomheaderTables />} />
                                <Route path="/add-MPInterfaceBOMLineTable" element={<AddMPInterfaceBOMLineTable />} />

                                <Route path="/" element={<MpheaderTablesTable />} />
                                <Route path="/MpheaderTables" element={<MpheaderTablesTable />} />

                                <Route path="/user" element={<UserTable />} />
                                <Route path="/add-user" element={<AddUser />} />
                                <Route path="/update-user/:id" element={<UpdateUser />} />
                                {/* Post Routes */}
                                <Route path="/posts" element={<PostTable />} />
                                <Route path="/add-post" element={<AddPost />} />
                                <Route path="/update-post/:id" element={<UpdatePost />} />
                            </Route>

                        </Routes>
                    </GenericPaginationProvider>
                </SecondaryProvider>
            </GenericProvider>
        </Suspense>
    </Router>
);

export default AppRoutes;
