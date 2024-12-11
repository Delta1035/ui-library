# ./bash/check-msg.sh

#!/bin/bash

# 该文件用来判断当前是不是 git merge 状态，如果是的话，本地 .git下 会存在 MERGE_MSG 文件
# 尝试读取该文件内容，如果是 Merge branch 开头，我们认为此时就是 merge 状态
# 在该状态下，跳过 lint-staged 和 commitizen 两步，因为检查没有意义
# 补充rebase的判断,如果处于rebase状态,也跳过相关操作

set -e
# merge 信息存放位置
check_file=$(pwd)"/.git/MERGE_MSG";
#rebase目录
check_rebase_apply=$(pwd)"/.git/rebase-apply";
check_rebase_merge=$(pwd)"/.git/rebase-merge";

# 判断文件是否存在
if [ -f "$check_file" ]; then
  # 读取 merge 信息
  mergeMsg=`cat '.git/MERGE_MSG'`;
  # 如果是以 Merge branch 开头，返回2
  if [[ $mergeMsg =~ ^Merge.*branch ]]; then
    exit 2;
  # 其他特殊情况解决冲突，正常不会走到此if分支
  elif [[ $mergeMsg = *"Conflict"* ]]; then
    exit 2;
  fi;
fi;

# reabase过程返回2
if [ -d "$check_rebase_apply" ] || [ -d "$check_rebase_merge" ]; then
  exit 2;
fi; 

# 非Merge状态也非rebase状态
exit 1;
