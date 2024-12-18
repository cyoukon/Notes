---
title: 设计模式
# icon: lightbulb
---

## 设计模式的六大原则

**总原则——开闭原则（Open Closed Principle）**

> 一个软件实体，如类、模块和函数应该**对扩展开放，对修改关闭**。

在程序需要进行拓展的时候，不能去修改原有的代码，而是要扩展原有代码，实现一个热插拔的效果。所以一句话概括就是：为了使程序的扩展性好，易于维护和升级。

想要达到这样的效果，我们需要使用接口和抽象类等。

**1、单一职责原则（Single Responsibility Principle）**

> 一个类应该只有一个发生变化的原因。

不要存在多于一个导致类变更的原因，也就是说每个类应该实现单一的职责，否则就应该把类拆分。

**2、里氏替换原则（Liskov Substitution Principle）**

> 所有引用基类的地方必须能透明地使用其子类的对象。

任何基类可以出现的地方，子类一定可以出现。里氏替换原则是继承复用的基石，只有当衍生类可以替换基类，软件单位的功能不受到影响时，基类才能真正被复用，而衍生类也能够在基类的基础上增加新的行为。

里氏代换原则是对“开-闭”原则的补充。实现“开闭”原则的关键步骤就是抽象化。而基类与子类的继承关系就是抽象化的具体实现，所以里氏替换原则是对实现抽象化的具体步骤的规范。里氏替换原则中，**子类对父类的方法尽量不要重写和重载**。因为父类代表了定义好的结构，通过这个规范的接口与外界交互，子类不应该随便破坏它。

**3、依赖倒置原则（Dependence Inversion Principle）**

> 1、上层模块不应该依赖底层模块，它们都应该依赖于抽象。
> 2、抽象不应该依赖于细节，细节应该依赖于抽象。

面向接口编程，依赖于抽象而不依赖于具体。写代码时用到具体类时，不与具体类交互，而与具体类的上层接口交互。

**4、接口隔离原则（Interface Segregation Principle）**

> 1、客户端不应该依赖它不需要的接口。
> 2、类间的依赖关系应该建立在最小的接口上。

每个接口中不存在子类用不到却必须实现的方法，如果不然，就要将接口拆分。使用多个隔离的接口，比使用单个接口（多个接口方法集合到一个的接口）要好。

**5、迪米特法则（最少知道原则）(Law of Demeter)**

> 只与你的直接朋友交谈，不跟“陌生人”说话。

一个类对自己依赖的类知道的越少越好。无论被依赖的类多么复杂，都应该将逻辑封装在方法的内部，通过public方法提供给外部。这样当被依赖的类变化时，才能最小的影响该类。

最少知道原则的另一个表达方式是：只与直接的朋友通信。类之间只要有耦合关系，就叫朋友关系。耦合分为依赖、关联、聚合、组合等。我们称出现为成员变量、方法参数、方法返回值中的类为直接朋友。局部变量、临时变量则不是直接的朋友。我们要求陌生的类不要作为局部变量出现在类中。

**6、合成复用原则（Composite Reuse Principle）**

> 尽量使用对象组合/聚合，而不是继承关系达到软件复用的目的。

合成或聚合可以将已有对象纳入到新对象中，使之成为新对象的一部分，因此新对象可以调用已有对象的功能。

## 设计模式的三大类

**创建型模式（Creational Pattern）：**对类的实例化过程进行了抽象，能够将软件模块中**对象的创建**和对象的使用分离。

| 中                                                 | 英               | 使用频度 | 说明                                                         |
| -------------------------------------------------- | ---------------- | -------- | ------------------------------------------------------------ |
| [工厂模式](./工厂模式/Factory%20Method.md)           | Factory Method   | 5        | 工厂方法设计模式定义了一个用于创建对象的接口，但让子类决定实例化哪个类。此模式允许类将实例化延迟到子类。 |
| [抽象工厂模式](./抽象工厂模式/Abstract%20Factory.md) | Abstract Factory | 5        | 抽象工厂设计模式提供了一个接口，用于创建相关或从属对象，而无需指定它们的具体类。 |
| [单例模式](./单例模式/Singleton.md)                | Singleton        | 4        | Singleton设计模式确保一个类只有一个实例，并提供对它的全局访问点。 |
| [建造者模式](./建造者模式/Builder.md)              | Builder          | 2        | 生成器设计模式将复杂对象的构造与其表示分离，以便相同的构造过程可以创建不同的表示。 |
| [原型模式](./原型模式/Prototype.md)                | Prototype        | 3        | 原型设计模式指定使用原型实例创建的对象类型，并通过复制此原型创建新对象。 |

**结构型模式（Structural Pattern）**：关注于对象的组成以及对象之间的依赖关系，描述如何将类或者对象结合在一起形成更大的结构，就像**搭积木**，可以通过简单积木的组合形成复杂的、功能更为强大的结构。

| 中                                      | 英        | 使用频度 | 说明                                                         |
| --------------------------------------- | --------- | -------- | ------------------------------------------------------------ |
| [适配器模式](./适配器模式/Adapter.md)   | Adapter   | 4        | 适配器设计模式将类的接口转换为客户端期望的另一个接口。这种设计模式允许由于接口不兼容而无法正常工作的类协同工作。 |
| [装饰者模式](./装饰者模式/Decorator.md) | Decorator | 3        | Decorator设计模式动态地将额外的职责附加到对象上。这种模式提供了一种灵活的替代子类化的方法来扩展功能。 |
| [代理模式](./代理模式/Proxy.md)         | Proxy     | 4        | 代理设计模式为另一个对象提供代理项或占位符，以控制对它的访问。 |
| [外观模式](./外观模式/Facade.md)        | Facade    | 5        | 1Facade设计模式为子系统中的一组接口提供统一接口。此模式定义了更高级别的接口，使子系统更易于使用。 |
| [桥接模式](./桥接模式/Bridge.md)        | Bridge    | 2        | 桥接设计模式将抽象与其实现解耦，以便两者可以独立变化。       |
| [组合模式](./组合模式/Composite.md)     | Composite | 4        | 复合设计模式将对象组合成树结构，以表示部分-整体层次结构。此模式允许客户端统一处理单个对象和对象的组成。 |
| [享元模式](./享元模式/Flyweight.md)     | Flyweight | 1        | Flyweight设计模式使用共享来高效地支持大量细粒度对象。        |

**行为型模式（Behavioral Pattern）**：关注于对象的行为问题，是对在不同的对象之间划分责任和算法的抽象化；不仅仅关注类和对象的结构，而且重点关注它们之间的**相互作用**。

| 中                                                | 英              | 使用频度 | 说明                                                         |
| ------------------------------------------------- | --------------- | -------- | ------------------------------------------------------------ |
| [策略模式](./策略模式/Strategy.md)                | Strategy        | 5        | 策略设计模式定义了一系列算法，封装了每一个算法，并使它们可以互换。此模式允许算法独立于使用它的客户端而变化。 |
| [模板方法模式](./模板方法模式/Template%20Method.md) | Template Method | 3        | 模板方法设计模式定义操作中算法的框架，将某些步骤推迟到子类。此模式允许子类在不改变算法结构的情况下重新定义算法的某些步骤。 |
| [观察者模式](./观察者模式/Observer.md)            | Observer        | 5        | 观察者设计模式定义了对象之间的一对多依赖关系，以便当一个对象更改状态时，自动通知并更新其所有依赖项。 |
| [迭代器模式](./迭代器模式/Iterator.md)            | Iterator        | 5        | 迭代器设计模式提供了一种顺序访问聚合对象元素的方法，而无需公开其底层表示。 |
| [责任链模式](./责任链模式/Chain%20of%20Resp.md)       | Chain of Resp.  | 2        | 责任链设计模式为多个对象提供了处理请求的机会，从而避免了将请求的发送方与其接收方耦合。该模式将接收对象链接起来，并沿着该链传递请求，直到对象处理它为止。 |
| [命令模式](./命令模式/Command.md)                 | Command         | 4        | 命令设计模式将请求封装为对象，从而使您能够使用不同的请求、队列或日志请求参数化客户端，并支持可撤消的操作。 |
| [备忘录模式](./备忘录模式/Memento.md)             | Memento         | 1        | Memento设计模式在不违反封装的情况下捕获并外部化对象的内部状态，以便稍后可以将对象恢复到该状态。 |
| [状态模式](./状态模式/State.md)                   | State           | 3        | 状态设计模式允许对象在其内部状态更改时改变其行为。对象将显示为更改其类。 |
| [访问者模式](./访问者模式/Visitor.md)             | Visitor         | 1        | 访问者设计模式表示对对象结构的元素执行的操作。此模式允许您定义新操作，而无需更改其操作的元素的类。 |
| [中介者模式](./中介者模式/Mediator.md)            | Mediator        | 2        | 中介设计模式定义了一个对象，该对象封装了一组对象如何交互。Mediator通过防止对象彼此显式引用来促进松散耦合，并允许您独立地改变它们的交互。 |
| [解释器模式](./解释器模式/Interpreter.md)         | Interpreter     | 1        | 给定一种语言，解释器设计模式为其语法定义了一种表示形式，同时定义了一个解释器，该解释器使用这种表示形式来解释该语言中的句子。 |
