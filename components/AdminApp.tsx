"use client";
import {Admin, Resource, Layout, ListGuesser, EditGuesser} from "react-admin";
import {Dashboard} from "@/components/Dashboard";
import {authProvider} from "@/common/authProvider";
import {TaskList} from "@/components/task/TaskList";
import {TaskEdit} from "@/components/task/TaskEdit";
import {TaskCreate} from "@/components/task/TaskCreate";
import {TradePairList} from "@/components/tradePair/TradePairList";
import {TradePairEdit} from "@/components/tradePair/TradePairEdit";
import {TradePairCreate} from "@/components/tradePair/TradePairCreate";
import {TransactionPrepareList} from "@/components/transactionPrepare/TransactionPrepareList";
import {TransactionPrepareEdit} from "@/components/transactionPrepare/TransactionPrepareEdit";
import {TransactionSwapEdit} from "@/components/transactionSwap/TransactionSwapEdit";
import {TransactionSwapList} from "@/components/transactionSwap/TransactionSwapList";
import {WalletList} from "@/components/wallet/WalletList";
import {WalletEdit} from "@/components/wallet/WalletEdit";
import {TransactionApproveList} from "@/components/transactionApprove/TransactionApproveList";
import {TransactionApproveEdit} from "@/components/transactionApprove/TransactionApproveEdit";
import {TransactionApproveAdminEdit} from "@/components/transactionApproveAdmin/TransactionApproveAdminEdit";
import {TransactionApproveAdminList} from "@/components/transactionApproveAdmin/TransactionApproveAdminList";
import {TransactionCollectEdit} from "@/components/transactionCollect/TransactionCollectEdit";
import {TransactionCollectList} from "@/components/transactionCollect/TransactionCollectList";
import {AdminList} from "@/components/admin/AdminList";
import {AdminEdit} from "@/components/admin/AdminEdit";
import {AdminCreate} from "@/components/admin/AdminCreate";
import {BalanceList} from "@/components/balance/BalanceList";
import {ConfigList} from "@/components/config/ConfigList";
import {ConfigEdit} from "@/components/config/ConfigEdit";
import {dataProvider, i18nProvider, Role} from "@/common/constants";
import {AuthGroupList} from "@/components/authGroup/AuthGroupList";
import {AuthGroupEdit} from "@/components/authGroup/AuthGroupEdit";
import CollectPage from "@/components/transactionCollect/CollectPage";
import HandymanIcon from '@mui/icons-material/Handyman';
import GroupIcon from '@mui/icons-material/Group';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TaskIcon from '@mui/icons-material/Task';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import FlagIcon from '@mui/icons-material/Flag';
import RecyclingIcon from '@mui/icons-material/Recycling';
import BalancePage from "@/components/balance/BalancePage";

const AdminApp = () => (
    <Admin
        dataProvider={dataProvider}
        darkTheme={{palette: {mode: 'dark'}}}
        dashboard={Dashboard}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        requireAuth
    >
        {permissions => (
            <>
                {permissions.group === Role.Super
                    ?
                    <>
                        <Resource name="configs"
                                  options={{label: "配置信息"}}
                                  list={ConfigList}
                                  edit={ConfigEdit}
                                  icon={HandymanIcon}
                        />
                        <Resource name="auth-groups"
                                  options={{label: "分组"}}
                                  list={AuthGroupList}
                                  edit={AuthGroupEdit}
                                  icon={GroupIcon}
                        />
                        <Resource name="admins"
                                  options={{label: "管理员"}}
                                  list={AdminList}
                                  edit={AdminEdit}
                                  create={AdminCreate}
                                  icon={ManageAccountsIcon}
                        />
                        <Resource name="trade-pairs"
                                  options={{label: "交易对"}}
                                  list={TradePairList}
                                  edit={TradePairEdit}
                                  create={TradePairCreate}
                                  icon={AttachMoneyIcon}
                        />
                    </>
                    : null
                }
                <Resource name="tasks"
                          options={{label: "任务"}}
                          list={TaskList}
                          edit={TaskEdit}
                          create={TaskCreate}
                          icon={TaskIcon}
                />
                <Resource name="wallets"
                          options={{label: "钱包"}}
                          list={WalletList}
                          edit={WalletEdit}
                          icon={AccountBalanceWalletIcon}
                />
                <Resource name="transaction/prepare"
                          options={{label: "准备记录"}}
                          list={TransactionPrepareList}
                          edit={TransactionPrepareEdit}
                          icon={CleanHandsIcon}
                />
                <Resource name="transaction/approve"
                          options={{label: "授权记录"}}
                          list={TransactionApproveList}
                          edit={TransactionApproveEdit}
                          icon={AssignmentTurnedInIcon}
                />
                <Resource name="transaction/approve-admin"
                          options={{label: "授权记录（管理员）"}}
                          list={TransactionApproveAdminList}
                          edit={TransactionApproveAdminEdit}
                          icon={AssignmentIndIcon}
                />
                <Resource name="transaction/swap"
                          options={{label: "swap记录"}}
                          list={TransactionSwapList}
                          edit={TransactionSwapEdit}
                          icon={CurrencyExchangeIcon}
                />
                <Resource name="/balance/statistical"
                          options={{label: "余额统计"}}
                          list={BalancePage}
                          icon={YoutubeSearchedForIcon}
                />
                <Resource name="balance"
                          options={{label: "余额记录"}}
                          list={BalanceList}
                          icon={AccountBalanceIcon}
                />
                <Resource name="/gas/collect"
                          options={{label: "归集gas费"}}
                          list={CollectPage}
                          icon={RecyclingIcon}
                />
                <Resource name="transaction/collect"
                          options={{label: "归集记录"}}
                          list={TransactionCollectList}
                          edit={TransactionCollectEdit}
                          icon={FlagIcon}
                />
            </>
        )}
    </Admin>
);


export default AdminApp;
