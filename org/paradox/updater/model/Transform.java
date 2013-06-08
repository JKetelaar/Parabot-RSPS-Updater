package org.paradox.updater.model;



/**
 * Created with IntelliJ IDEA.
 * User: jeronimo078
 * Date: 06-06-13
 * Time: 18:30
 * To change this template use File | Settings | File Templates.
 */
public abstract class Transform {

    public abstract boolean validate(ClassNode classNode);

    public abstract void execute(ClassNode classNode);

}
