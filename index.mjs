#! /usr/bin/env node

import { program } from "commander";
import pkg  from './package.json' assert { type: 'json' };

program.version(pkg.version);

const existHandle = (value) => {
  const newValue = `111${value}`;
  return newValue;
}


/**
 * option() 注册指令
 */
/**
 * requiredOption 注册指令，必填
 */
program
  // .option('-t --test [testMessage...]', '测试注册指令', '测试注册指令')
  .option('-tt|--testt [s]', '测试注册指令')
  // .option('--no-f --no-file', '测试返回值为false')
  // .requiredOption('-l --lli <value>', '必填指令', '必须有值')
  .option('-eee --eeexist <asd>', '额外参数处理', existHandle)
  .command('clone')
  .argument('[account]')
  .argument('<password>')
  .action((account,password) => {
    console.log(account,password)
  })

program.parse(process.argv);

const options = program.opts();
//program.getOptionValue('eeexist')
console.log(options);
