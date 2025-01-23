---
title: linq使用
---

## 累加器介绍
带种子值和结果选择器的累加器
```CSharp
void Main()
{
    string sentence = "the quick brown fox jumps over the lazy dog";
    var words = sentence.Split(' ');
    var funcCount = 0;
    var resultCount = 0;
    var reversed = words.Aggregate(
        // 种子，用作累加器的初始值，即首次执行 func 方法时，第一个参数的值
        seed: new StringBuilder(),
        // 遍历数据源，依次对数据源中的每一个数据调用此方法。
        // 第一个参数为当前值，第二个为数据源中遍历到的当前值，返回值会被用作下一次循环的当前值
        func: (current, next) =>
        {
            // 执行次数为 words.Length
            funcCount++;
            return current.Append(next[0..1].ToUpper()).Append(next[1..]).Append(' ');
        },
        // 处理累加器执行完后的最终值，仅在累加器全部执行完后，执行一次
        resultSelector: result =>
        {
            resultCount++;
            return result.ToString();
        });
    reversed.Dump();
    funcCount.Dump();
    resultCount.Dump();
}
/** 输出结果
The Quick Brown Fox Jumps Over The Lazy Dog 
9
1
 */
```

带种子值的累加器
```CSharp
void Main()
{
    string sentence = "the quick brown fox jumps over the lazy dog";
    var words = sentence.Split(' ');
    var funcCount = 0;
    var reversed = words.Aggregate(
        // 种子，用作累加器的初始值，即首次执行 func 方法时，第一个参数的值
        seed: new StringBuilder(),
        // 遍历数据源，依次对数据源中的每一个数据调用此方法。
        // 第一个参数为当前值，第二个为数据源中遍历到的当前值，返回值会被用作下一次循环的当前值
        func: (current, next) =>
        {
            // 执行次数为 words.Length
            funcCount++;
            return current.Append(next[0..1].ToUpper()).Append(next[1..]).Append(' ');
        });
    reversed.Dump();
    funcCount.Dump();
}
/** 输出结果
The Quick Brown Fox Jumps Over The Lazy Dog 
9
 */
```

仅包含累加器函数的累加器
```CSharp
void Main()
{
    string sentence = "the quick brown fox jumps over the lazy dog";
    var words = sentence.Split(' ');
    var funcCount = 0;
    var reversed = words.Aggregate(
        // 遍历数据源，依次对数据源中的每一个数据调用此方法。
        // 第一个参数为当前值（首次执行时为数据源的第一个数据），第二个为数据源中遍历到的当前值，返回值会被用作下一次循环的当前值
        func: (current, next) =>
        {
            // 执行次数为 words.Length - 1
            funcCount++;
            return current + " " + next[0..1].ToUpper() + next[1..];
        });
    reversed.Dump();
    funcCount.Dump();
}
/** 输出结果
the Quick Brown Fox Jumps Over The Lazy Dog
8
0
 */
```