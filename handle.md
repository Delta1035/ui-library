1. pnpm install @ui-library/components -w
安装失败，变现为从registry下载依赖，但是我需要从本地安装
解决办法：在根目录package.json的dependence写依赖以及对应的版本，然后再根目录安装