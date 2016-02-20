<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="authMainMenu.ascx.cs" Inherits="BookUI.Components.authMainMenu" %>
<link href="../css/authmainmenu.css" rel="stylesheet" />

<div id="authmenu">
    <%--<a href="../views/Welcome.aspx">Dataentry</a>
    <a href="../views/Reports.aspx">Reports</a>--%>
    <ul id="ul_menu" class="auth-mainmenu">
        <li class="li_menu"><a href="../views/settings.aspx" class="a_menu">Settings</a></li>
        <li class="li_menu"><a href="../views/dataentry.aspx" class="a_menu">Data Entry</a></li>
        <li class="li_menu"><a href="../views/editdata.aspx" class="a_menu">Edit Data</a></li>
        <li class="li_menu"><a href="../views/reports.aspx" class="a_menu">Reports</a></li>
        <li class="li_menu"><a href="../views/receptpayments.aspx" class="a_menu">Receipts& Payments</a></li>

        <%--<li class="li_menu"><a href="#" class="a_menu">Welcome</a></li>
          <li class="li_menu"><a href="#" class="a_menu">Pavan</a></li>    --%>
    </ul>

    <%--<ul id="ul_right">
        <li class="li_menu li_menwel bpk"><b>Welcome  </b>
            <asp:Label ID="lblusername" Text="" runat="server" /></li>
        <li class="li_menu li_menwel bpk">
            <asp:LinkButton ID="btnLogout" Text="Logout" runat="server" OnClick="btnLogout_Click" /></li>
    </ul>--%>


    <%-- <b>Welcome  </b><asp:Label ID="lblusername" Text="" runat="server" />
    <asp:LinkButton ID="btnLogout" Text="Logout" runat="server" OnClick="btnLogout_Click" />--%>
</div>