# ./bash/prepare-commit-msg.sh

#!/bin/bash

# calculate bin dir
# merge 信息, 通过merge&rebase生成的commit不再执行git-cz
sh -e $(pwd)"/bash/check-msg.sh";

if [ "$?" = "1" ]; then
  # 打开 commitizen 交互界面，辅助生成 commit 信息
  INFRA_DIR_NAME=$(dirname $(dirname "$0"))
  cd $INFRA_DIR_NAME
  # 打开新的终端运行cz，并标识是由hook触发的
  exec < /dev/tty && npx cz --hook || true
fi;
