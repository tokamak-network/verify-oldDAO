// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IWTON {
    function balanceOf(address account) external view returns (uint256);
    function onApprove(address owner, address spender, uint256 tonAmount, bytes calldata data) external returns (bool);
    function burnFrom(address account, uint256 amount) external;
    function swapToTON(uint256 wtonAmount) external returns (bool);
    function swapFromTON(uint256 tonAmount) external returns (bool);
    function swapToTONAndTransfer(address to, uint256 wtonAmount) external returns (bool);
    function swapFromTONAndTransfer(address to, uint256 tonAmount) external returns (bool);
    function renounceTonMinter() external;
}
