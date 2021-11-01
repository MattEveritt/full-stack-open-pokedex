If our project is being created with c# we could use StyleCop.Analyzers for linting. 
It is popular and very thorough and configuration settings can be set up the same for every user.
MSBuild can be used for automated building and can be extended for 
packaging, deployment and testing if needed which makes it a great tool for CI setup for c#.

For c# it seems that Azure Devops Server would be a great environment for the CI setup 
which also includes MSBuild.

In order to find out whether it would be better in cloud based or self hosted 
environment we would need to know the size of the application and how flexible 
the CI setup needs to be.
If we need a basic setup then a cloud based setup would be better 
because all the functionality is ready and there is no need to worry about hardware or 
time spent on setting up a self hosted CI system.
